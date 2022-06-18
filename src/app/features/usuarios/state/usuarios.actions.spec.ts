import * as fromUsuarios from './usuarios.actions';

describe('cargarUsuarios', () => {
  it('should return an action', () => {
    expect(fromUsuarios.cargarUsuarios().type).toBe(
      '[Lista Usuarios] Cargar Usuarios'
    );
  });
});
