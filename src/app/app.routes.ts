import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Página principal
  { path: 'team', component: TeamComponent },  // Página del equipo
  { path: 'product', component: ProductComponent},
  { path: 'about', component: AboutComponent },  // Página sobre nosotros
  { path: 'contact', component: ContactComponent },  // Página de contacto
  { path: '**', redirectTo: ''}  // Redirigir a la home si la ruta no existe
];
