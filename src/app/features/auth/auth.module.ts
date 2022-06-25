import { UsuariosRoutingModule } from './../usuarios/usuarios-routing.module';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AppMaterialModule } from 'src/app/core/app.material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

@NgModule({
  declarations: [LoginComponent,
    FormUsuarioComponent,],
  imports: [
    UsuariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,
    AppMaterialModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Prueba NgRx',
    }),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
