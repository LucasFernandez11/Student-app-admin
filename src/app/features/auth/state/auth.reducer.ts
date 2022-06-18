import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/core/models/usuario';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  usuarioActivo: Usuario;
}

export const initialState: AuthState = {
  usuarioActivo: {
    idUsuario: '',
    usuario: '',
    contrasena: '',
    rol: 0,
  },
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.cargarSesion, (state, { data }) => {
    return { ...state, usuarioActivo: data };
  }),

  on(AuthActions.loginAction, (state, { usuario, contrasena }) => {
    return { ...state, usuario };
  }),

  on(AuthActions.cerrarSesion, () => {
    return initialState;
  })
);
