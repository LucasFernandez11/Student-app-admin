import { ActionReducerMap } from '@ngrx/store';
import { AlumnoState } from 'src/app/core/models/alumno.state';
import { alumnoReducer } from './state/alumnos.reducer';

export interface AppState {
  alumnos: AlumnoState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  alumnos: alumnoReducer,
};
