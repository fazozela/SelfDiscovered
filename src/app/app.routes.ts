import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'sesion',
    loadComponent: () => import('./pages/auth/components/auth/auth.component')
  },
  {
    path: 'registrar',
    loadComponent: () => import('./pages/auth/components/register/register.component')
  },
  {
    path: 'consultas',
    loadComponent: () => import('./pages/consultations/components/consultation-layout/consultation-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/consultations/components/consultations-page/consultation-list/consultation-list.component'),
      },
      {
        path: 'crear',
        loadComponent: () => import('./pages/consultations/components/consultations-page/consultation-create/consultation-create.component'),
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/consultations/components/consultations-page/consultation-by-id/consultation-by-id.component'),
      },
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/components/blog-layout/blog-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/blog/components/blog-page/blog/blog.component'),
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/blog/components/blog-page/blog-by-id/blog-by-id.component'),
      }
    ]
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
    loadComponent: () => import('./pages/faq/components/faq-page/faq/faq.component'),
    children: [
      {
        path: 'area_1',
        loadComponent: () => import('./pages/faq/components/faq-page/area1/area1.component')
      },
      {
        path: 'area_2',
        loadComponent: () => import('./pages/faq/components/faq-page/area2/area2.component')
      },
      {
        path: 'area_3',
        loadComponent: () => import('./pages/faq/components/faq-page/area3/area3.component')
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
    loadComponent: () => import('./pages/resources/components/resources-layout/resourcesLayoutComponent'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/resources/components/resources-page/resources/resources.component')
      },
      {
        path: 'seccion_1',
        loadComponent: () => import('./pages/resources/components/resources-page/section1/section1.component')
      },
      {
        path: 'seccion_2',
        loadComponent: () => import('./pages/resources/components/resources-page/section2/section2.component')
      },
      {
        path: 'seccion_3',
        loadComponent: () => import('./pages/resources/components/resources-page/section3/section3.component')
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
