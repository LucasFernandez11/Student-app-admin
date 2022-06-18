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
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DialogCurso } from 'src/app/core/interfaces/dialogCurso';
import { Inscripcion } from 'src/app/core/models/inscripcion';
import { AuthService } from 'src/app/core/services/auth.service';
import { CursosService } from 'src/app/core/services/cursos.service';
import { InscripcionesService } from 'src/app/core/services/inscripciones.service';
import {
  cargarInscripcionesCurso,
  inscripcionesCargadasCurso,
} from 'src/app/features/inscripciones/state/inscripciones.actions';
import {
  selectorCargandoInscripciones,
  selectorListaInscripcionesCurso,
} from 'src/app/features/inscripciones/state/inscripciones.selectors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css'],
})
export class VerCursoComponent implements OnInit {
  dataSource: any;

  usuario: any;

  cursalumSubscription!: Subscription;
  datosFiltrados$!: Observable<Inscripcion[]>;

  displayedColumns: string[] = ['idCurso', 'idAlumno', 'acciones'];

  constructor(
    public dialogRef: MatDialogRef<VerCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogCurso,
    public fb: FormBuilder,
    private _inscripcionesService: InscripcionesService,
    public authService: AuthService,
    private ruta: Router,
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(
      cargarInscripcionesCurso({ idCurso: this.data.idCurso })
    );
    this.datosFiltrados$ = this.store.select(selectorListaInscripcionesCurso);
  }

  desinscribirAlumno(idAlumno: any, idCurso: any) {
    if (idAlumno !== undefined && idCurso !== undefined) {
      this._inscripcionesService
        .desinscribirAlumnoCurso(idAlumno, idCurso)
        .subscribe((res) => {
          const id = res.idInscripcion;
          this._inscripcionesService
            .eliminarInscripcion(res)
            .subscribe((resp: any) => {
              this.store.dispatch(
                cargarInscripcionesCurso({ idCurso: this.data.idCurso })
              );
              Swal.fire({
                icon: 'success',
                title: 'Se desinscribió correctamente el alumno',
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
