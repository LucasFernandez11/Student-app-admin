import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsuariosComponent } from './components/dashboard-usuarios/dashboard-usuarios.component';

const routes: Routes = [{ path: '', component: DashboardUsuariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
