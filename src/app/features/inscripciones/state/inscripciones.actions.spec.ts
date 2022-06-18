import * as fromInscripciones from './inscripciones.actions';

describe('cargarInscripciones', () => {
  it('should return an action', () => {
    expect(fromInscripciones.cargarInscripciones().type).toBe(
      '[Lista Inscripciones] Cargar Inscripciones'
    );
  });
});
