import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppMaterialModule } from 'src/app/core/app.material';
import { environment } from 'src/environments/environment';
import { UsuariosEffects } from '../../state/usuarios.effects';
import {
  usuariosFeatureKey,
  usuarioReducer,
} from '../../state/usuarios.reducer';
import { DashboardUsuariosComponent } from './dashboard-usuarios.component';

describe('DashboardUsuariosComponent', () => {
  let component: DashboardUsuariosComponent;
  let fixture: ComponentFixture<DashboardUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppMaterialModule,
        RouterTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(usuariosFeatureKey, usuarioReducer),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
          name: 'Prueba NgRx',
        }),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([UsuariosEffects]),
      ],
      declarations: [DashboardUsuariosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El titulo de usuarios se renderiza correctamente en la vista', () => {
    const fixture = TestBed.createComponent(DashboardUsuariosComponent);
    const vista = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    expect(vista.querySelector('.container')?.textContent).toContain(
      'Tabla de Usuarios'
    );
  });

  it('Los usuarios se renderizaron correctamente en la vista', () => {
    const fixture = TestBed.createComponent(DashboardUsuariosComponent);
    const vista = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    expect(vista.querySelector('.container')?.textContent).toContain(
      'Tabla de Usuarios'
    );
  });
});
