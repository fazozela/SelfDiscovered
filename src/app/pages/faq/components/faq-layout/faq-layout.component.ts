import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-faq-layout',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './faq-layout.component.html',
  styleUrl: './faq-layout.component.css'
})
export class FaqLayoutComponent {

}
