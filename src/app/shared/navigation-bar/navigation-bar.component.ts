import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, RouterLinkActive, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  constructor(private router: Router, private renderer: Renderer2) {
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
}
