import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInscripcion } from 'src/app/core/interfaces/dialogInscripcion';

@Component({
  selector: 'app-ver-inscripcion',
  templateUrl: './ver-inscripcion.component.html',
  styleUrls: ['./ver-inscripcion.component.css'],
})
export class VerInscripcionComponent {
  dataSource: any;

  constructor(
    public dialogRef: MatDialogRef<VerInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogInscripcion,
    public fb: FormBuilder
  ) {}

  formControl = new FormControl('', [Validators.required]);

  getError() {
    return this.formControl.hasError('required') ? 'El campo es requerido' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
