import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../app/components/alumno/alumno.component';
import { ProfesoresComponent } from '../app/components/profesor/profesor.component';
import { InicioComponent } from '../app/components/inicio/inicio.component'; 
import {AlumnoDetalleComponent} from '../app/components/alumno-detalle/alumno-detalle.component'
import {AlumnoListaComponent} from '../app/components/alumno-lista/alumno-lista.component'

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnos-lista', component: AlumnoListaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'profesores', component: ProfesoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }