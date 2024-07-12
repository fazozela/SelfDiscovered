import { Component } from '@angular/core';
import { LayoutFaqComponent } from './layout/layout-faq.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [LayoutFaqComponent, RouterLinkActive, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent {

}
