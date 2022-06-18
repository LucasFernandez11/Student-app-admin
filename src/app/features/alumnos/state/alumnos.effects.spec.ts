import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AlumnosEffects } from './alumnos.effects';

describe('AlumnosEffects', () => {
  let actions$: Observable<any>;
  let effects: AlumnosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AlumnosEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(AlumnosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
