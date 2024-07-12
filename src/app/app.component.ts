import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./shared/navigation-bar/navigation-bar.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavigationBarComponent, FooterComponent]
})
export class AppComponent {
  title = 'selfdiscovered';
}
