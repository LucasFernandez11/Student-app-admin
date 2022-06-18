import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAlumnosComponent } from './components/dashboard-alumnos/dashboard-alumnos.component';
import { EditarAlumnoComponent } from './components/dialog/editar-alumno/editar-alumno.component';
import { EliminarAlumnoComponent } from './components/dialog/eliminar-alumno/eliminar-alumno.component';
import { VerAlumnoComponent } from './components/dialog/ver-alumno/ver-alumno.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAlumnosComponent,
    children: [
      { path: 'ver/:id', component: VerAlumnoComponent },
      { path: 'editar/:id', component: EditarAlumnoComponent },
      { path: 'eliminar/:id', component: EliminarAlumnoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
