
import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../services/profesores.service';
import { Profesor } from '../../models/Profesor';

@Component({
  selector: 'app-profesor-lista',
  templateUrl: './profesor-lista.component.html',
  styleUrls: ['./profesor-lista.component.css']
})
export class ProfesorListaComponent implements OnInit {
  profesores: Profesor[] = [];
  selectedProfesor: Profesor | undefined;

  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit(): void {
    this.getProfesores();
  }

  getProfesores(): void {
    this.profesoresService.getProfesores().subscribe((data: Profesor[]) => {
      this.profesores = data;
    });
  }

  getProfesor(id: number): void {
    this.profesoresService.getProfesor(id).subscribe((profesor: Profesor) => {
      this.selectedProfesor = profesor;
    });
  }

  updateProfesor(): void {
    if (this.selectedProfesor) {
      this.profesoresService.updateProfesor(this.selectedProfesor.id, this.selectedProfesor).subscribe((updatedProfesor: Profesor) => {
        const index = this.profesores.findIndex(p => p.id === updatedProfesor.id);
        if (index !== -1) {
          this.profesores[index] = updatedProfesor;
        }
        this.selectedProfesor = undefined;
      });
    }
  }

  deleteProfesor(id: number): void {
    this.profesoresService.deleteProfesor(id).subscribe(() => {
      this.profesores = this.profesores.filter(p => p.id !== id);
    });
  }
}
