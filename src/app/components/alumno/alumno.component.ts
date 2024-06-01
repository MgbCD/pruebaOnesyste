import { Component } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnosComponent {
  newAlumno: Alumno = {
    id: 0,
    nombreCompleto: '',
    identificacion: '',
    numeroTelefono: '',
    email: '',
    direccionResidencia: '',
    genero: '',
    numeroMatricula: '',
    programa: '',
    notaPromedio: 0
  };

  constructor(private alumnosService: AlumnosService) { }

  createAlumno(): void {
    this.alumnosService.createAlumno(this.newAlumno).subscribe();
  }
}
