import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';

const routes : Routes = [
  { path: '', redirectTo : 'home', pathMatch : 'full' },
  { path: 'home', component: AppComponent },
  {path : 'servicios' , component : ServiciosComponent},
  {path: '**', component : ServiciosComponent}
];
  
@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    ServiciosComponent,
    CaracteristicasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
