import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes : Routes = [
  { path: '', redirectTo : 'home' , pathMatch : 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'nosotros', component: NosotrosComponent },
   {path : 'caracteristicas' , component : CaracteristicasComponent},
   {path: 'contacto', component : ContactoComponent}
];
  
@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    ServiciosComponent,
    CaracteristicasComponent,
    HomeComponent,
    NosotrosComponent,
    EquipoComponent
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
