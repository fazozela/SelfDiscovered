import { Component } from '@angular/core';
import { FaqLayoutComponent } from '../../faq-layout/faq-layout.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqLayoutComponent, RouterLinkActive, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent {

}
