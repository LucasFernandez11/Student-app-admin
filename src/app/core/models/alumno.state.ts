import { Alumno } from './alumno';

export interface AlumnoState {
  cargando: boolean;
  alumnos: Alumno[];
}
