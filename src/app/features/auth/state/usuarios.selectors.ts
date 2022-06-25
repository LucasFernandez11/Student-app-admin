import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsuarioState } from 'src/app/core/models/usuario.state';
import * as fromUsuarios from './usuarios.reducer';

export const selectorUsuario = createFeatureSelector<UsuarioState>(
  fromUsuarios.usuariosFeatureKey
);
export const selectorCargandoUsuarios = createSelector(
  selectorUsuario,
  (state: UsuarioState) => state.cargando
);

export const selectorListaUsuarios = createSelector(
  selectorUsuario,
  (state: UsuarioState) => state.usuarios
);
