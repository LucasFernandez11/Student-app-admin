import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { cargarAlumnos, alumnosCargados } from './alumnos.actions';
import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Injectable()
export class AlumnosEffects {
  cargarAlumnosEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarAlumnos),
      exhaustMap(() =>
        this.alumnosService
          .obtenerDatos()
          .pipe(map((alumnos) => alumnosCargados({ alumnos })))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private alumnosService: AlumnosService
  ) {}
}
