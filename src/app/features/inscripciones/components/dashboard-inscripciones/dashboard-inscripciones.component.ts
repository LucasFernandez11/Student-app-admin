import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { EditarInscripcionComponent } from '../dialog/editar-inscripcion/editar-inscripcion.component';
import { EliminarInscripcionComponent } from '../dialog/eliminar-inscripcion/eliminar-inscripcion.component';
import { Inscripcion } from 'src/app/core/models/inscripcion';
import { InscripcionesService } from 'src/app/core/services/inscripciones.service';
import { VerInscripcionComponent } from '../dialog/ver-inscripcion/ver-inscripcion.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import {
  cargarInscripciones,
  inscripcionesCargadas,
} from '../../state/inscripciones.actions';
import { selectorListaInscripciones } from '../../state/inscripciones.selectors';

@Component({
  selector: 'app-dashboard-inscripciones',
  templateUrl: './dashboard-inscripciones.component.html',
  styleUrls: ['./dashboard-inscripciones.component.css'],
})
export class DashboardInscripcionesComponent implements OnInit {
  @ViewChild(MatTable) myTable!: MatTable<any>;
  dataSaved = false;
  rol!: boolean;

  inscripSubscription!: Subscription;
  datos$!: Observable<any>;

  displayedColumns: string[] = [
    'idInscripcion',
    'idAlumno',
    'idCurso',
    'acciones',
  ];

  constructor(
    private _inscripcionesService: InscripcionesService,
    public authService: AuthService,
    private ruta: Router,
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(cargarInscripciones());
    this.datos$ = this.store.select(selectorListaInscripciones);
    this.inscripSubscription =
      this._inscripcionesService.inscripcionSubject.subscribe((data) => {
        this.store.dispatch(inscripcionesCargadas({ inscripciones: data }));
      });
  }

  ngOnDestroy(): void {
    this.inscripSubscription.unsubscribe();
  }

  openDialogEditar(inscripcion: Inscripcion) {
    const dialogRef = this.dialog.open(EditarInscripcionComponent, {
      width: '600px',
      panelClass: 'makeItMiddle',
      data: {
        idInscripcion: inscripcion.idInscripcion,
        idAlumno: inscripcion.idAlumno,
        idCurso: inscripcion.idCurso,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result !== undefined) {
        this.ruta.navigate(['inscripciones']);
        this._inscripcionesService.editarInscripcion(result).subscribe(() => {
          this.store.dispatch(cargarInscripciones());
        });
      }
    });
  }

  openDialogEliminar(inscripcion: Inscripcion) {
    const dialogRef = this.dialog.open(EliminarInscripcionComponent, {
      width: '250px',
      data: {
        idInscripcion: inscripcion.idInscripcion,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this._inscripcionesService.eliminarInscripcion(result).subscribe(() => {
          this.store.dispatch(cargarInscripciones());
        });
      }
    });
  }

  openDialogVer(inscripcion: Inscripcion) {
    const dialogRef = this.dialog.open(VerInscripcionComponent, {
      width: '300px',
      panelClass: 'makeItMiddle',
      data: {
        idInscripcion: inscripcion.idInscripcion,
        idAlumno: inscripcion.idAlumno,
        idCurso: inscripcion.idCurso,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.ruta.navigate(['inscripciones']);
    });
  }
}
