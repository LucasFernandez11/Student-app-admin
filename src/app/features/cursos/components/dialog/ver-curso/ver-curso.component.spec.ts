import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppMaterialModule } from 'src/app/core/app.material';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { CursosRoutingModule } from '../../../cursos-routing.module';
import { CursoEffects } from '../../../state/curso.effects';
import { cursoFeatureKey, cursoReducer } from '../../../state/curso.reducer';

import { VerCursoComponent } from './ver-curso.component';

describe('VerCursoComponent', () => {
  let component: VerCursoComponent;
  let fixture: ComponentFixture<VerCursoComponent>;

  const dialogMock = {
    close: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerCursoComponent],
      imports: [
        BrowserAnimationsModule,
        CursosRoutingModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
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
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
