import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInscripcionesComponent } from './components/dashboard-inscripciones/dashboard-inscripciones.component';
import { EditarInscripcionComponent } from './components/dialog/editar-inscripcion/editar-inscripcion.component';
import { EliminarInscripcionComponent } from './components/dialog/eliminar-inscripcion/eliminar-inscripcion.component';
import { VerInscripcionComponent } from './components/dialog/ver-inscripcion/ver-inscripcion.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardInscripcionesComponent,
    children: [
      { path: 'ver/:id', component: VerInscripcionComponent },
      { path: 'editar/:id', component: EditarInscripcionComponent },
      { path: 'eliminar/:id', component: EliminarInscripcionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionesRoutingModule {}
