import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ConsultationService } from "../../../services/consultation.service";
import { ConsultationByIDResponse, Reply } from "../../../interfaces/consultation-by-id.interface";
import { AuthService } from "../../../../auth/services/auth.service";
import { LoginStatusResponse } from "../../../../auth/interfaces";
import Swal from "sweetalert2";

@Component({
  selector: 'app-consultation-by-id',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consultation-by-id.component.html',
  styleUrls: ['./consultation-by-id.component.css']
})
export default class ConsultationByIdComponent implements OnInit {
  consultation: ConsultationByIDResponse | null = null;
  replyForm: FormGroup = this.initForm();
  replyingTo: Reply | null = null;

  constructor(
    private route: ActivatedRoute,
    private consultationService: ConsultationService,
    public authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadConsultation(id);
    }
  }

  private initForm(): FormGroup {
    return this.fb.group({
      content: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  loadConsultation(id: string) {
    this.consultationService.getConsultationById(id).subscribe({
      next: (data) => {
        this.consultation = data;
      },
      error: (error) => console.error('Error loading consultation:', error)
    });
  }

  submitReply() {
    if (this.replyForm.valid && this.consultation) {
      const replyContent = this.replyForm.get('content')?.value;
      this.consultationService.createReply(replyContent, this.consultation.id).subscribe({
        next: (response) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Respuesta enviada",
            showConfirmButton: false,
            timer: 1500
          });
          this.replyForm.reset();
          this.clearReplyingTo();
          this.loadConsultation(this.consultation!.id);
        },
        error: (error) => {
          console.error('Error submitting reply:', error);
          // Handle error (e.g., show error message to user)
        }
      });
    }
  }

  getCurrentUserId(): string | undefined {
    const currentUser = this.authService.currentUser();
    if (currentUser && 'id' in currentUser) {
      return currentUser.id;
    }
    return undefined;
  }

  canReply(reply: Reply): boolean {
    const currentUserId = this.getCurrentUserId();
    if (!currentUserId) return false;

    const lastReply = this.consultation!.replies[this.consultation!.replies.length - 1];

    // If the last reply is from the current user, don't show any "Responder" buttons
    if (lastReply.user.id === currentUserId) return false;

    // For all other replies, only show "Responder" button for the last non-user reply
    const lastNonUserReplyIndex = this.consultation!.replies
      .slice()
      .reverse()
      .findIndex(r => r.user.id !== currentUserId);

    return this.consultation!.replies[this.consultation!.replies.length - 1 - lastNonUserReplyIndex].id === reply.id;
  }

  isLastReply(reply: Reply): boolean {
    return this.consultation!.replies[this.consultation!.replies.length - 1].id === reply.id;
  }

  isAdminReply(reply: Reply): boolean {
    return reply.user.roles.includes('admin');
  }

  setReplyingTo(reply: Reply) {
    this.replyingTo = reply;
  }

  clearReplyingTo() {
    this.replyingTo = null;
  }

  get contentControl() {
    return this.replyForm.get('content');
  }
}
