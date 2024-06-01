import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {
  alumnos: Alumno[] = [];
  selectedAlumno: Alumno | undefined;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe((data: Alumno[]) => {
      this.alumnos = data;
    });
  }

  getAlumno(id: number): void {
    this.alumnosService.getAlumno(id).subscribe((alumno: Alumno) => {
      this.selectedAlumno = alumno;
    });
  }

  updateAlumno(): void {
    if (this.selectedAlumno) {
      this.alumnosService.updateAlumno(this.selectedAlumno.id, this.selectedAlumno).subscribe((updatedAlumno: Alumno) => {
        const index = this.alumnos.findIndex(a => a.id === updatedAlumno.id);
        if (index !== -1) {
          this.alumnos[index] = updatedAlumno;
        }
        this.selectedAlumno = undefined;
      });
    }
  }

  deleteAlumno(id: number): void {
    this.alumnosService.deleteAlumno(id).subscribe(() => {
      this.alumnos = this.alumnos.filter(a => a.id !== id);
    });
  }
}
