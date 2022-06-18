import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from './../../../../core/models/alumno';
import { AlumnosService } from './../../../../core/services/alumnos.service';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { EditarAlumnoComponent } from '../dialog/editar-alumno/editar-alumno.component';
import { EliminarAlumnoComponent } from '../dialog/eliminar-alumno/eliminar-alumno.component';
import { VerAlumnoComponent } from '../dialog/ver-alumno/ver-alumno.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { alumnosCargados, cargarAlumnos } from '../../state/alumnos.actions';
import { selectorListaAlumnos } from '../../state/alumnos.selectors';

@Component({
  selector: 'app-dashboard-alumnos',
  templateUrl: './dashboard-alumnos.component.html',
  styleUrls: ['./dashboard-alumnos.component.css'],
})
export class DashboardAlumnosComponent implements OnInit {
  @ViewChild(MatTable) myTable!: MatTable<any>;
  dataSaved = false;
  rol!: boolean;

  alumnSubscription!: Subscription;
  datos$!: Observable<Alumno[]>;

  displayedColumns: string[] = [
    'idAlumno',
    'nombres',
    'apellidos',
    'email',
    'dni',
    'domicilio',
    'telefono',
    'acciones',
  ];

  constructor(
    private _alumnosService: AlumnosService,
    public authService: AuthService,
    private ruta: Router,
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(cargarAlumnos());
    this.datos$ = this.store.select(selectorListaAlumnos);
    this.alumnSubscription = this._alumnosService.alumnoSubject.subscribe(
      (data) => {
        this.store.dispatch(alumnosCargados({ alumnos: data }));
      }
    );
  }

  ngOnDestroy(): void {
    if (this.alumnSubscription) {
      this.alumnSubscription.unsubscribe();
    }
  }

  openDialogEditar(alumno: Alumno) {
    const dialogRef = this.dialog.open(EditarAlumnoComponent, {
      width: '600px',
      panelClass: 'makeItMiddle',
      data: {
        idAlumno: alumno.idAlumno,
        nombres: alumno.nombres,
        apellidos: alumno.apellidos,
        dni: alumno.dni,
        email: alumno.email,
        domicilio: alumno.domicilio,
        telefono: alumno.telefono,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this._alumnosService.editarAlumno(result).subscribe(() => {
        this.store.dispatch(cargarAlumnos());
      });
    });
  }

  openDialogEliminar(alumno: Alumno) {
    const dialogRef = this.dialog.open(EliminarAlumnoComponent, {
      width: '250px',
      data: {
        idAlumno: alumno.idAlumno,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.ruta.navigate(['alumnos']);
        this._alumnosService.eliminarAlumno(result).subscribe(() => {
          this.store.dispatch(cargarAlumnos());
        });
      }
    });
  }

  openDialogVer(alumno: Alumno) {
    const dialogRef = this.dialog.open(VerAlumnoComponent, {
      width: '600px',
      height: '600px',
      panelClass: 'makeItMiddle',
      data: {
        idAlumno: alumno.idAlumno,
        nombres: alumno.nombres,
        apellidos: alumno.apellidos,
        dni: alumno.dni,
        email: alumno.email,
        domicilio: alumno.domicilio,
        telefono: alumno.telefono,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.ruta.navigate(['alumnos']);
    });
  }
}
