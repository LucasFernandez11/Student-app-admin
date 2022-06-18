import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCurso } from 'src/app/core/interfaces/dialogCurso';
@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.css'],
})
export class EliminarCursoComponent {
  dataSource: any;

  constructor(
    public dialogRef: MatDialogRef<EliminarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogCurso,
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
