import { ActionReducerMap } from '@ngrx/store';
import { CursoState } from 'src/app/core/models/curso.state';
import { cursoReducer } from './state/curso.reducer';

export interface AppState {
  cursos: CursoState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  cursos: cursoReducer,
};
