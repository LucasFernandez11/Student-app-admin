import { createReducer, on } from '@ngrx/store';
import { Alumno } from 'src/app/core/models/alumno';
import * as AlumnoActions from './alumnos.actions';

export const alumnoFeatureKey = 'alumno';

export interface AlumnoState {
  cargando: boolean;
  alumnos: Alumno[];
}

export const initialState: AlumnoState = {
  cargando: false,
  alumnos: [],
};

export const alumnoReducer = createReducer(
  initialState,
  on(AlumnoActions.cargarAlumnos, (state) => {
    return { ...state, cargando: true };
  }),
  on(AlumnoActions.alumnosCargados, (state, { alumnos }) => {
    return { ...state, cargando: false, alumnos };
  })
);
