import { Component } from '@angular/core';
import { ProfesoresService } from '../../services/profesores.service';
import { Profesor } from '../../models/Profesor';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesoresComponent {
  newProfesor: Profesor = {
    id: 0,
    nombreCompleto: '',
    identificacion: '',
    numeroTelefono: '',
    email: '',
    direccionResidencia: '',
    genero: '',
    salario: '',
    dependencia: '',
    materia: ''
  };

  constructor(private profesoresService: ProfesoresService) { }

  createProfesor(): void {
    this.profesoresService.createProfesor(this.newProfesor).subscribe();
  }
}
