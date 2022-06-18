import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DialogAlumno } from 'src/app/core/interfaces/dialogAlumno';
import { Inscripcion } from 'src/app/core/models/inscripcion';
import { AuthService } from 'src/app/core/services/auth.service';
import { InscripcionesService } from 'src/app/core/services/inscripciones.service';
import { cargarInscripcionesAlumno } from 'src/app/features/inscripciones/state/inscripciones.actions';
import { selectorListaInscripcionesAlumno } from 'src/app/features/inscripciones/state/inscripciones.selectors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-alumno',
  templateUrl: './ver-alumno.component.html',
  styleUrls: ['./ver-alumno.component.css'],
})
export class VerAlumnoComponent implements OnInit {
  dataSource: any;
  usuario: any;

  displayedColumns: string[] = ['idCurso', 'acciones'];

  alumnSubscription!: Subscription;
  datosFiltrados$!: Observable<Inscripcion[]>;
  constructor(
    public dialogRef: MatDialogRef<VerAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogAlumno,
    public fb: FormBuilder,
    private _inscripcionesService: InscripcionesService,
    public authService: AuthService,
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(
      cargarInscripcionesAlumno({ idAlumno: this.data.idAlumno })
    );
    this.datosFiltrados$ = this.store.select(selectorListaInscripcionesAlumno);
  }

  desinscribirCurso(idAlumno: any, idCurso: any) {
    if (idAlumno !== undefined && idCurso !== undefined) {
      this._inscripcionesService
        .desinscribirAlumnoCurso(idAlumno, idCurso)
        .subscribe((res) => {
          const id = res.idInscripcion;
          this._inscripcionesService
            .eliminarInscripcion(res)
            .subscribe((resp: any) => {
              this.store.dispatch(
                cargarInscripcionesAlumno({ idAlumno: this.data.idAlumno })
              );
              Swal.fire({
                icon: 'success',
                title: 'Se desinscribió correctamente el alumno del curso',
                confirmButtonColor: '#0D47A1',
              });
            });
        });
    }
  }

  formControl = new FormControl('', [Validators.required]);

  getError() {
    return this.formControl.hasError('required') ? 'El campo es requerido' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
