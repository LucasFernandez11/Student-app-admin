import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import * as UsuariosActions from './usuarios.actions';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Injectable()
export class UsuariosEffects {
  cargarUsuariosEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(UsuariosActions.cargarUsuarios),
      exhaustMap(() =>
        this.usuariosService
          .obtenerDatos()
          .pipe(
            map((usuarios) => UsuariosActions.usuariosCargados({ usuarios }))
          )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}
}
