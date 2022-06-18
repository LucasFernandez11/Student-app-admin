import { createAction, props } from '@ngrx/store';
import { Alumno } from 'src/app/core/models/alumno';

export const cargarAlumnos = createAction('[Lista Alumnos] Cargar Alumnos');

export const alumnosCargados = createAction(
  '[Lista Alumnos] Alumnos Cargados',
  props<{ alumnos: Alumno[] }>()
);
