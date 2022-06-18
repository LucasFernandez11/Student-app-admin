import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlumnoState } from 'src/app/core/models/alumno.state';
import * as fromAlumno from './alumnos.reducer';

export const selectorAlumno = createFeatureSelector<AlumnoState>(
  fromAlumno.alumnoFeatureKey
);

export const selectorCargandoAlumnos = createSelector(
  selectorAlumno,
  (state: AlumnoState) => state.cargando
);

export const selectorListaAlumnos = createSelector(
  selectorAlumno,
  (state: AlumnoState) => state.alumnos
);
