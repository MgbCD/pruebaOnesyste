import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../models/Profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  rutaGeneral = 'http://localhost:8080/api/profesor';

  constructor(private http: HttpClient) { }

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.rutaGeneral);
  }

  getProfesor(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.rutaGeneral}/${id}`);
  }

  createProfesor(profesor: Profesor): Observable<Profesor> {
    return this.http.post<Profesor>(this.rutaGeneral, profesor);
  }

  updateProfesor(id: number, profesor: Profesor): Observable<Profesor> {
    return this.http.put<Profesor>(`${this.rutaGeneral}/${id}`, profesor);
  }

  deleteProfesor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.rutaGeneral}/${id}`);
  }
}
