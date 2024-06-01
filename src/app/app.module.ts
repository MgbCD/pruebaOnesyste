import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ProfesoresComponent } from './components/profesor/profesor.component';
import { AlumnosComponent } from './components/alumno/alumno.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AlumnoDetalleComponent } from './components/alumno-detalle/alumno-detalle.component';
import { AlumnoListaComponent } from './components/alumno-lista/alumno-lista.component';
import { ProfesorListaComponent } from './components/profesor-lista/profesor-lista.component';
import { ProfesorDetalleComponent } from './components/profesor-detalle/profesor-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent,
    AlumnosComponent,
    InicioComponent,
    AlumnoDetalleComponent,
    AlumnoListaComponent,
    ProfesorListaComponent,
    ProfesorDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
