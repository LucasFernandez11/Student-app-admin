import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppMaterialModule } from 'src/app/core/app.material';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { AlumnosRoutingModule } from '../../../alumnos-routing.module';
import { AlumnosEffects } from '../../../state/alumnos.effects';
import {
  alumnoFeatureKey,
  alumnoReducer,
} from '../../../state/alumnos.reducer';

import { VerAlumnoComponent } from './ver-alumno.component';

describe('VerAlumnoComponent', () => {
  let component: VerAlumnoComponent;
  let fixture: ComponentFixture<VerAlumnoComponent>;
  const dialogMock = {
    close: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AlumnosRoutingModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
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
      declarations: [VerAlumnoComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
