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
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppMaterialModule } from 'src/app/core/app.material';
import { environment } from 'src/environments/environment';
import { AlumnosEffects } from '../../state/alumnos.effects';
import { alumnoFeatureKey, alumnoReducer } from '../../state/alumnos.reducer';
import { DashboardAlumnosComponent } from '../dashboard-alumnos/dashboard-alumnos.component';
import { FormComponent } from './form.component';

describe('FormAlumnosComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const dialogMock = {
    close: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(alumnoFeatureKey, alumnoReducer),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
          name: 'Prueba NgRx',
        }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([AlumnosEffects]),
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DashboardAlumnosComponent, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formularioAlumno.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let alumno = component.formularioAlumno.controls['email'];
    expect(alumno.valid).toBeFalsy();

    alumno.setValue('');
    expect(alumno.hasError('required')).toBeTruthy();

    alumno.setValue('A');
    expect(alumno.hasError('email')).toBeTruthy();
  });
});
