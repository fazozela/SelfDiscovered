import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from "@angular/forms";
import {ConsultationService} from "../../../services/consultation.service";
import {Router, ActivatedRoute, RouterModule} from "@angular/router";
import {CommonModule, Location} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-consultation-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consultation-create.component.html',
  styleUrl: './consultation-create.component.css'
})
export default class ConsultationCreateComponent implements OnInit {
  consultationForm: FormGroup;
  isSubmitting = false;

  private fb = inject(FormBuilder);
  private consultationService = inject(ConsultationService);
  private router = inject(Router);
  private location = inject(Location)

  constructor() {
    this.consultationForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.consultationForm.valid) {
      this.isSubmitting = true;
      const formValue = this.consultationForm.getRawValue();
      console.log(formValue);

      this.consultationService.createConsultation(formValue).subscribe({
        next: (response) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Consulta creada con éxito",
            showConfirmButton: false,
            timer: 1500
          });
          this.location.back();
        },
        error: (error) => {
          console.error('Error creating consultation:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al crear la consulta",
            showConfirmButton: false,
            timer: 1500
          });
          this.isSubmitting = false;
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}
