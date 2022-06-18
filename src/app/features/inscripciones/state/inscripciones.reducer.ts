import { Action, createReducer, on } from '@ngrx/store';
import { Inscripcion } from 'src/app/core/models/inscripcion';
import * as InscripcionesActions from './inscripciones.actions';

export const inscripcionesFeatureKey = 'inscripciones';

export interface InscripcionState {
  cargando: boolean;
  inscripciones: Inscripcion[];
}

export const initialState: InscripcionState = {
  cargando: false,
  inscripciones: [],
};

export const inscripcionesReducer = createReducer(
  initialState,

  on(InscripcionesActions.cargarInscripciones, (state) => {
    return { ...state, cargando: true };
  }),
  on(InscripcionesActions.inscripcionesCargadas, (state, { inscripciones }) => {
    return { ...state, cargando: false, inscripciones };
  }),

  on(InscripcionesActions.cargarInscripcionesCurso, (state) => {
    return { ...state, cargando: true };
  }),

  on(
    InscripcionesActions.inscripcionesCargadasCurso,
    (state, { inscripciones }) => {
      return { ...state, cargando: false, inscripciones };
    }
  ),

  on(InscripcionesActions.cargarInscripcionesAlumno, (state) => {
    return { ...state, cargando: true };
  }),

  on(
    InscripcionesActions.inscripcionesCargadasAlumno,
    (state, { inscripciones }) => {
      return { ...state, cargando: false, inscripciones };
    }
  )
);
