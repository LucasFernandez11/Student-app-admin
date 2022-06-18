import * as fromAuth from './auth.actions';

describe('cargarAuths', () => {
  it('should return an action', () => {
    expect(fromAuth.cargarSesion.type).toBe('[Auth] Cargar Sesion');
  });
});
