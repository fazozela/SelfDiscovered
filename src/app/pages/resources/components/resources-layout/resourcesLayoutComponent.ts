import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './resourcesLayoutComponent.html',
  styleUrl: './resourcesLayoutComponent.css'
})
export default class ResourcesLayoutComponent {

}
