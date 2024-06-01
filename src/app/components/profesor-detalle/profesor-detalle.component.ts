import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from '../../services/profesores.service';
import { Profesor } from '../../models/Profesor';

@Component({
  selector: 'app-profesor-detalle',
  templateUrl: './profesor-detalle.component.html',
  styleUrls: ['./profesor-detalle.component.css']
})
export class ProfesorDetalleComponent implements OnInit {
  selectedProfesor: Profesor | undefined;

  constructor(
    private route: ActivatedRoute,
    private profesoresService: ProfesoresService
  ) { }

  ngOnInit(): void {
    this.getProfesor();
  }

  getProfesor(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;
    this.profesoresService.getProfesor(id).subscribe((profesor: Profesor) => {
      this.selectedProfesor = profesor;
    });
  }

  updateProfesor(): void {
    if (this.selectedProfesor) {
      this.profesoresService.updateProfesor(this.selectedProfesor.id, this.selectedProfesor).subscribe();
    }
  }
}
