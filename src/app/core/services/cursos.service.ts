import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Curso } from './../models/curso';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cursoSubject = new Subject<any>();
  URL_SERVICIOS = environment.URL_SERVICIOS;

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${environment.URL_SERVICIOS}/Cursos`);
  }

  obtenerCurso(idCurso: any): Observable<any> {
    return this.http.get(`${environment.URL_SERVICIOS}/Cursos/${idCurso}`);
  }

  agregarCursos(curso: Curso): Observable<any> {
    return this.http
      .post<Curso>(`${environment.URL_SERVICIOS}/Cursos`, curso)
      .pipe(
        tap({
          next: (curso) => this.cursoSubject.next(curso),
        })
      );
  }

  editarCurso(curso: Curso): Observable<any> {
    return this.http
      .put<Curso>(`${environment.URL_SERVICIOS}/Cursos/${curso.idCurso}`, curso)
      .pipe(
        tap({
          next: () => this.cursoSubject.next(curso),
        })
      );
  }

  eliminarCurso(curso: Curso): Observable<any> {
    return this.http
      .delete<Curso>(`${environment.URL_SERVICIOS}/Cursos/${curso.idCurso}`)
      .pipe(
        tap({
          next: () => this.cursoSubject.next(curso),
        })
      );
  }
}
