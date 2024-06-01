import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
   rutaGeneral = 'http://localhost:8080/api/alumnos'

  constructor(private http: HttpClient) {

   }

 
  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.rutaGeneral);
  }
  getAlumno(id: number): Observable<Alumno>{
    return this.http.get<Alumno>(`${this.rutaGeneral}/${id}` ) //por id es esta sin pliral  

   
  }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.rutaGeneral, alumno);

  }

  updateAlumno(id: number, alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.rutaGeneral}/${id}`, alumno);
  }

  deleteAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.rutaGeneral}/${id}`);
  }



  

}
