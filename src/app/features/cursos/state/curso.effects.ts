import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { CursosService } from 'src/app/core/services/cursos.service';
import { cargarCursos, cursosCargados } from './curso.actions';

@Injectable()
export class CursoEffects {
  cargarCursosEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarCursos),
      exhaustMap(() =>
        this.cursosService
          .obtenerDatos()
          .pipe(map((cursos) => cursosCargados({ cursos })))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private cursosService: CursosService
  ) {}
}
