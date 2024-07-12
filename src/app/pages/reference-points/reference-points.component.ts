import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReferencePoints {
  location: string;
  description: string;
  hours: string;
  coverImage: string;
  number: number;
  map: string;
}

@Component({
  selector: 'app-reference-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference-points.component.html',
  styleUrl: './reference-points.component.css'
})
export default class ReferencePointsComponent {
  books: ReferencePoints[] = [
    { location: "Punto de referencia 1", description: "descripción 1", hours: "horas de atención 1", coverImage: "assets/house.jpg", number: 59162736621, map: "link mapa" },
    { location: "Punto de referencia 2", description: "descripción 2", hours: "horas de atención 2", coverImage: "assets/house.jpg", number: 1234, map: "link mapa" },
    { location: "Punto de referencia 3", description: "descripción 3", hours: "horas de atención 3", coverImage: "assets/house.jpg", number: 1234, map: "link mapa" },
    { location: "Punto de referencia 4", description: "descripción 4", hours: "horas de atención 4", coverImage: "assets/house.jpg", number: 1234, map: "link mapa" },
  ];
}
