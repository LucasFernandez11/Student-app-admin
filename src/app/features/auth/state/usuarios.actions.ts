import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/core/models/usuario';

export const cargarUsuarios = createAction('[Lista Usuarios] Cargar Usuarios');

export const usuariosCargados = createAction(
  '[Lista Usuarios] Usuarios Cargados',
  props<{ usuarios: Usuario[] }>()
);
