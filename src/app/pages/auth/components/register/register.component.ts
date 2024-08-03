import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {
  private fb = inject(FormBuilder);
  private authenticationService = inject(AuthService);
  private router = inject( Router );

  public myForm: FormGroup = this.fb.group({
    email: ['fazozela@gmail.com', [Validators.required]],
    password:  ['Abc123456', [Validators.required]],
  })

  register(){
    const {email, password} = this.myForm.value;

    this.authenticationService.register(email, password)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/inicio')
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Registrado correctamente!",
            showConfirmButton: false,
            timer: 1500
          });
        },
        error: (errorMessage) => {
          Swal.fire('Error', errorMessage, 'error')
        }
      })
  }
}
