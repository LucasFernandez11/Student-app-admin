import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCursosComponent } from './components/dashboard-cursos/dashboard-cursos.component';
import { EditarCursoComponent } from './components/dialog/editar-curso/editar-curso.component';
import { EliminarCursoComponent } from './components/dialog/eliminar-curso/eliminar-curso.component';
import { VerCursoComponent } from './components/dialog/ver-curso/ver-curso.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCursosComponent,
    children: [
      { path: 'ver/:id', component: VerCursoComponent },
      { path: 'editar/:id', component: EditarCursoComponent },
      { path: 'eliminar/:id', component: EliminarCursoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
