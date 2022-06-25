import { FormUsuarioComponent } from './../usuarios/components/form-usuario/form-usuario.component';
import { EliminarUsuarioComponent } from './../usuarios/components/dialog/eliminar-usuario/eliminar-usuario.component';
import { VerUsuarioComponent } from './../usuarios/components/dialog/ver-usuario/ver-usuario.component';
import { EditarUsuarioComponent } from './../usuarios/components/dialog/editar-usuario/editar-usuario.component';
import { DashboardUsuariosComponent } from './../usuarios/components/dashboard-usuarios/dashboard-usuarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { AppMaterialModule } from 'src/app/core/app.material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UsuariosEffects } from './state/usuarios.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { usuarioReducer, usuariosFeatureKey } from './state/usuarios.reducer';

@NgModule({
  declarations: [
    DashboardUsuariosComponent,
    EditarUsuarioComponent,
    VerUsuarioComponent,
    EliminarUsuarioComponent,
    FormUsuarioComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forFeature(usuariosFeatureKey, usuarioReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Prueba NgRx',
    }),
    EffectsModule.forFeature([UsuariosEffects]),
  ],
})
export class UsuariosModule {}
