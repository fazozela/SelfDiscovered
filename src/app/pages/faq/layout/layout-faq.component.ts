import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-faq-layout',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './layout-faq.component.html',
  styleUrl: './layout-faq.component.css'
})
export class LayoutFaqComponent {

}
