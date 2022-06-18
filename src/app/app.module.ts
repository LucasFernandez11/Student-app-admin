import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './core/app-routing.module';
import { AlumnosModule } from './features/alumnos/alumnos.module';
import { CursosModule } from './features/cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { InscripcionesModule } from './features/inscripciones/inscripciones.module';
import { UsuariosModule } from './features/usuarios/usuarios.module';
import { AlumnosRoutingModule } from './features/alumnos/alumnos-routing.module';
import { InscripcionesRoutingModule } from './features/inscripciones/inscripciones-routing.module';
import { UsuariosRoutingModule } from './features/usuarios/usuarios-routing.module';
import { CursosRoutingModule } from './features/cursos/cursos-routing.module';
import { AuthModule } from './features/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AlumnosRoutingModule,
    CursosRoutingModule,
    InscripcionesRoutingModule,
    UsuariosRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    UsuariosModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Cargar y cursos cargados en la lista',
    }),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
