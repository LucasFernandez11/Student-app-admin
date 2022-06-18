import { Inscripcion } from './inscripcion';

export interface InscripcionState {
  cargando: boolean;
  inscripciones: Inscripcion[];
}
