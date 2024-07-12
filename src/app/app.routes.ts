import { Routes } from '@angular/router';
import { Section1Component } from './pages/resources/section1/section1.component';
import { Section2Component } from './pages/resources/section2/section2.component';
import { Section3Component } from './pages/resources/section3/section3.component';
import ResourcesComponent from './pages/resources/resources.component';
import { Area1Component } from './pages/faq/area1/area1.component';
import { Area2Component } from './pages/faq/area2/area2.component';
import { Area3Component } from './pages/faq/area3/area3.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'consultas',
    loadComponent: () => import('./pages/consultations/consultations.component')
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component')
  },
  {
    path: 'biblioteca',
    loadComponent: () => import('./pages/library/library.component')
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about-us/about-us.component')
  },
  {
    path: 'referencias',
    loadComponent: () => import('./pages/reference-points/reference-points.component')
  },
  {
    path: 'preguntas',
    loadComponent: () => import('./pages/faq/faq.component'),
    children: [
      {
        path: 'area_1',
        component: Area1Component
      },
      {
        path: 'area_2',
        component: Area2Component
      },
      {
        path: 'area_3',
        component: Area3Component
      },
      { path: '**', redirectTo: 'area_1' }
    ]
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component')
  },
  {
    path: 'recursos',
    loadComponent: () => import('./pages/resources/layout/layout.component'),
    children: [
      {
        path: '',
        component: ResourcesComponent
      },
      {
        path: 'seccion_1',
        component: Section1Component
      },
      {
        path: 'seccion_2',
        component: Section2Component
      },
      {
        path: 'seccion_3',
        component: Section3Component
      },
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'terminos',
    loadComponent: () => import('./pages/terms/terms.component')
  },
  {
    path: 'politicas',
    loadComponent: () => import('./pages/politics/politics.component')
  },
  { path: '**', redirectTo: '' },
];