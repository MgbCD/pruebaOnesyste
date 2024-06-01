import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {
  selectedAlumno: Alumno | undefined;

  constructor(
    private route: ActivatedRoute,
    private alumnosService: AlumnosService
  ) { }

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;
    this.alumnosService.getAlumno(id).subscribe((alumno: Alumno) => {
      this.selectedAlumno = alumno;
    });
  }

  updateAlumno(): void {
    if (this.selectedAlumno) {
      this.alumnosService.updateAlumno(this.selectedAlumno.id, this.selectedAlumno).subscribe();
    }
  }
}
