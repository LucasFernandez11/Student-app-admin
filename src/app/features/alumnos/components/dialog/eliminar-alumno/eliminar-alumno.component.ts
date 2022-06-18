import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAlumno } from 'src/app/core/interfaces/dialogAlumno';
import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Component({
  selector: 'app-eliminar-alumno',
  templateUrl: './eliminar-alumno.component.html',
  styleUrls: ['./eliminar-alumno.component.css'],
})
export class EliminarAlumnoComponent {
  dataSource: any;

  constructor(
    public dialogRef: MatDialogRef<EliminarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogAlumno,
    private _alumnosService: AlumnosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
