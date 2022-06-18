import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAlumnosComponent } from '../features/alumnos/components/dashboard-alumnos/dashboard-alumnos.component';
import { LoginComponent } from '../features/auth/components/login/login.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  /*  {
    path: 'auth',
    loadChildren: () =>
      import('./../features/auth/auth.module').then((m) => m.AuthModule),
  }, */

  {
    path: 'alumnos',
    loadChildren: () =>
      import('./../features/alumnos/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
    canActivate: [LoginGuard],
  },

  {
    path: 'cursos',
    loadChildren: () =>
      import('../features/cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [LoginGuard],
  },

  {
    path: 'inscripciones',
    loadChildren: () =>
      import('../features/inscripciones/inscripciones.module').then(
        (m) => m.InscripcionesModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./../features/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: '',
    component: DashboardAlumnosComponent,
    pathMatch: 'full',
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
