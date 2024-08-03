import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {ConsultationService} from "../../../services/consultation.service";
import {ConsultationResponse} from "../../../interfaces/consultation.interface";
import {AuthService} from "../../../../auth/services/auth.service";

@Component({
  selector: 'app-consultation-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './consultation-list.component.html',
  styleUrl: './consultation-list.component.css'
})
export default class ConsultationListComponent implements OnInit{

  private consultationService = inject(ConsultationService);
  private authService = inject(AuthService);
  private router = inject(Router);

  consultations: ConsultationResponse[] = [];
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.checkLoginStatus();
    if (this.isLoggedIn) {
      this.getAllConsultations();
    }
  }

  checkLoginStatus() {
    this.isLoggedIn = this.authService.authStatus() === 'authenticated';
  }

  getAllConsultations() {
    this.consultationService.getAllConsultations().subscribe({
      next: (response) => {
        console.log(response);
        this.consultations = response;
      },
      error: (error) => {
        console.error('Ocurrió un error!', error);
        if (error.status === 401) {
          this.authService.logout();
          this.router.navigate(['/sesion']);
        }
      }
    });
  }

}
