import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, RouterLinkActive, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import {AuthService} from "../../../pages/auth/services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  @ViewChild('navbarSupportedContent') navbarContent!: ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private authService: AuthService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeNavbar();
    });
  }

  closeNavbar() {
    if (this.navbarContent && this.navbarToggler) {
      const content = this.navbarContent.nativeElement;
      const toggler = this.navbarToggler.nativeElement;

      if (content.classList.contains('show')) {
        setTimeout(() => {
          this.renderer.removeClass(content, 'show');
          toggler.setAttribute('aria-expanded', 'false');
        }, 150); // Small delay to ensure the navigation has occurred
      }
    }
  }

  onLogout(){
    const token = localStorage.getItem('token');

    if(token){
      this.authService.logout();
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Sesión cerrada",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/inicio']);
    }else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "No se inició sesión",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  onLogin() {
    const token = localStorage.getItem('token');

    if(token){
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "La sesión ya fue iniciada",
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      this.router.navigate(['/sesion']);
    }
  }
}
