import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { loginAction } from './auth.actions';

@Injectable()
export class AuthEffects {
  iniciarSesionEffect = this.actions$.pipe(
    ofType(loginAction),
    switchMap((action) =>
      this.authService.IniciarSesion(action.usuario, action.contrasena)
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
