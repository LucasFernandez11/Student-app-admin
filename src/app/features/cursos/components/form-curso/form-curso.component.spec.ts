import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppMaterialModule } from 'src/app/core/app.material';
import { environment } from 'src/environments/environment';
import { CursoEffects } from '../../state/curso.effects';
import { cursoFeatureKey, cursoReducer } from '../../state/curso.reducer';
import { DashboardCursosComponent } from '../dashboard-cursos/dashboard-cursos.component';
import { FormCursoComponent } from './form-curso.component';

describe('FormCursoComponent', () => {
  let component: FormCursoComponent;
  let fixture: ComponentFixture<FormCursoComponent>;

  const dialogMock = {
    close: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCursoComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(cursoFeatureKey, cursoReducer),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
          name: 'Prueba NgRx',
        }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([CursoEffects]),
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DashboardCursosComponent, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formularioCurso.valid).toBeFalsy();
  });

  it('curso field validity', () => {
    let curso = component.formularioCurso.controls['curso'];
    expect(curso.valid).toBeFalsy();

    curso.setValue('');
    expect(curso.hasError('required')).toBeTruthy();

    /*  email.setValue('A');
    expect(email.hasError('minLength')).toBeTruthy(); */
  });
});
