import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Alumno } from './../models/alumno';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  alumnoSubject = new Subject<any>();
  URL_SERVICIOS = environment.URL_SERVICIOS;

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get(`${environment.URL_SERVICIOS}/Alumnos`);
  }

  obtenerAlumno(idAlumno: any): Observable<any> {
    return this.http.get(`${environment.URL_SERVICIOS}/Alumnos/${idAlumno}`);
  }

  agregarAlumnos(alumno: any) {
    return this.http.post(`${environment.URL_SERVICIOS}/Alumnos`, alumno).pipe(
      tap({
        next: () => this.alumnoSubject.next(alumno),
      })
    );
  }

  editarAlumno(alumno: any) {
    return this.http
      .put(`${environment.URL_SERVICIOS}/Alumnos/${alumno.idAlumno}`, alumno)
      .pipe(
        tap({
          next: () => this.alumnoSubject.next(alumno),
        })
      );
  }

  eliminarAlumno(alumno: any) {
    return this.http
      .delete(`${environment.URL_SERVICIOS}/Alumnos/${alumno.idAlumno}`, alumno)
      .pipe(
        tap({
          next: () => this.alumnoSubject.next(alumno),
        })
      );
  }
}
