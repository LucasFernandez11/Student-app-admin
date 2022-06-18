import * as fromCurso from './curso.actions';

describe('cargarCursos', () => {
  it('should return an action', () => {
    expect(fromCurso.cargarCursos().type).toBe('[Lista Cursos] Cargar Cursos');
  });
});
