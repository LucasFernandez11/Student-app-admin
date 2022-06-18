import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCursosComponent } from './components/dashboard-cursos/dashboard-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';

import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { EditarCursoComponent } from './components/dialog/editar-curso/editar-curso.component';
import { EliminarCursoComponent } from './components/dialog/eliminar-curso/eliminar-curso.component';
import { AppMaterialModule } from 'src/app/core/app.material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { VerCursoComponent } from './components/dialog/ver-curso/ver-curso.component';
import { StoreModule } from '@ngrx/store';
import { cursoFeatureKey, cursoReducer } from './state/curso.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CursoEffects } from './state/curso.effects';
import { CursosService } from 'src/app/core/services/cursos.service';

@NgModule({
  declarations: [
    DashboardCursosComponent,
    EditarCursoComponent,
    EliminarCursoComponent,
    FormCursoComponent,
    VerCursoComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forFeature(cursoFeatureKey, cursoReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Prueba NgRx',
    }),
    EffectsModule.forFeature([CursoEffects]),
  ],
  providers: [CursosService],
})
export class CursosModule {}
