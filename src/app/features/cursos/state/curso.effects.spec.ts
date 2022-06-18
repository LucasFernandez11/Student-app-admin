import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CursoEffects } from './curso.effects';

describe('CursoEffects', () => {
  let actions$: Observable<any>;
  let effects: CursoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CursoEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CursoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
