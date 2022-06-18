import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsuariosEffects } from './usuarios.effects';

describe('UsuariosEffects', () => {
  let actions$: Observable<any>;
  let effects: UsuariosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsuariosEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(UsuariosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
