import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInscripcion } from 'src/app/core/interfaces/dialogInscripcion';
import { InscripcionesService } from 'src/app/core/services/inscripciones.service';

@Component({
  selector: 'app-eliminar-inscripcion',
  templateUrl: './eliminar-inscripcion.component.html',
  styleUrls: ['./eliminar-inscripcion.component.css'],
})
export class EliminarInscripcionComponent {
  dataSource: any;

  constructor(
    public dialogRef: MatDialogRef<EliminarInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogInscripcion,
    private _inscripcionService: InscripcionesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
