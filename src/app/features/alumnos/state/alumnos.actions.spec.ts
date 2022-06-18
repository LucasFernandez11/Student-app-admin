import * as fromAlumnos from './alumnos.actions';

describe('cargarAlumnos', () => {
  it('should return an action', () => {
    expect(fromAlumnos.cargarAlumnos().type).toBe(
      '[Lista Alumnos] Cargar Alumnos'
    );
  });
});
