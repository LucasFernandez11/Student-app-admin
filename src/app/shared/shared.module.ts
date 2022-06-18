import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AppMaterialModule } from '../core/app.material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConvertirestadoPipe } from './pipes/convertirestado.pipe';
import { UnirnombreapellidoPipe } from './pipes/unirnombreapellido.pipe';
import { RouterModule } from '@angular/router';
import { ConvertirIdNombreAlumnoPipe } from './pipes/convertir-id-nombre-alumno.pipe';
import { ConvertirIdNombreCursoPipe } from './pipes/convertir-id-nombre-curso.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NopagefoundComponent,
    DashboardComponent,
    ConvertirestadoPipe,
    UnirnombreapellidoPipe,
    ConvertirIdNombreAlumnoPipe,
    ConvertirIdNombreCursoPipe,
  ],
  imports: [CommonModule, RouterModule, AppMaterialModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    ConvertirestadoPipe,
    UnirnombreapellidoPipe,
    ConvertirIdNombreAlumnoPipe,
    ConvertirIdNombreCursoPipe,
  ],
})
export class SharedModule {}
