import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ServiciosComponent} from './servicios/servicios.component';

const routes: Routes = [
  { path: '', redirectTo : 'home', pathMatch : 'full' },
  { path: 'home', component: AppComponent },
  {path : 'servicios' , component : ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
