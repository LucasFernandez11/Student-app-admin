import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  inscripcionSubject = new Subject<any>();
  URL_SERVICIOS = environment.URL_SERVICIOS;

  constructor(private http: HttpClient) {}

  obtenerDatosInscripciones(): Observable<any> {
    return this.http.get<any>(`${environment.URL_SERVICIOS}/Inscripciones`);
  }

  obtenerDatosInscripcionesFiltradoCurso(inscripcion: any): Observable<any> {
    return this.http.get<any>(
      `${environment.URL_SERVICIOS}/Inscripciones?idCurso=${inscripcion.idCurso}`
    );
  }

  obtenerDatosInscripcionesFiltradoAlumno(inscripcion: any): Observable<any> {
    return this.http.get<any>(
      `${environment.URL_SERVICIOS}/Inscripciones?idAlumno=${inscripcion.idAlumno}`
    );
  }

  desinscribirAlumnoCurso(idAlumno: string, idCurso: string): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_SERVICIOS}/Inscripciones`)
      .pipe(
        map((inscripciones: any) => {
          return inscripciones.filter(
            (i: any) => i.idAlumno === idAlumno && i.idCurso === idCurso
          )[0];
        })
      );
  }

  agregarInscripcion(inscripcion: Inscripcion) {
    return this.http
      .post(`${environment.URL_SERVICIOS}/Inscripciones`, inscripcion)
      .pipe(
        tap({
          next: () => this.inscripcionSubject.next(inscripcion),
        })
      );
  }

  editarInscripcion(inscripcion: Inscripcion) {
    return this.http
      .put(
        `${environment.URL_SERVICIOS}/Inscripciones/${inscripcion.idInscripcion}`,
        inscripcion
      )
      .pipe(
        tap({
          next: () => this.inscripcionSubject.next(inscripcion),
        })
      );
  }

  eliminarInscripcion(inscripcion: Inscripcion) {
    return this.http
      .delete(
        `${environment.URL_SERVICIOS}/Inscripciones/${inscripcion.idInscripcion}`
      )
      .pipe(
        tap({
          next: () => this.inscripcionSubject.next(inscripcion),
        })
      );
  }
}
