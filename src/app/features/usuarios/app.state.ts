import { ActionReducerMap } from '@ngrx/store';
import { UsuarioState } from 'src/app/core/models/usuario.state';
import { usuarioReducer } from './state/usuarios.reducer';

export interface AppState {
  usuarios: UsuarioState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  usuarios: usuarioReducer,
};
