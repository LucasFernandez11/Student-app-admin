import { Usuario } from './usuario';

export interface UsuarioState {
  cargando: boolean;
  usuarios: Usuario[];
}
