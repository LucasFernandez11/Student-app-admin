import { ActionReducerMap } from '@ngrx/store';
import {
  inscripcionesReducer,
  InscripcionState,
} from './state/inscripciones.reducer';

export interface AppState {
  inscripciones: InscripcionState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  inscripciones: inscripcionesReducer,
};
