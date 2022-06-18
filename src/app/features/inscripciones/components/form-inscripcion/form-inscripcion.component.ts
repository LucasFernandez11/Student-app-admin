import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { CursosService } from 'src/app/core/services/cursos.service';
import { InscripcionesService } from 'src/app/core/services/inscripciones.service';
import { cargarInscripciones } from '../../state/inscripciones.actions';
import { DashboardInscripcionesComponent } from '../dashboard-inscripciones/dashboard-inscripciones.component';
@Component({
  selector: 'app-form-inscripcion',
  templateUrl: './form-inscripcion.component.html',
  styleUrls: ['./form-inscripcion.component.css'],
})
export class FormInscripcionComponent {
  dataSaved = false;
  massage = null;

  formularioInscripcion!: FormGroup;

  alumnoSubscription!: Subscription;
  datosAlumnos$!: Observable<any>;

  datosSubscription!: Subscription;
  datosCursos$!: Observable<any>;

  constructor(
    private _mytable: DashboardInscripcionesComponent,
    private _inscripcionesService: InscripcionesService,
    private _alumnosService: AlumnosService,
    private _cursosService: CursosService,
    public fb: FormBuilder,
    public dialog: MatDialog,
    private store: Store
  ) {
    this.formularioInscripcion = fb.group({
      idAlumno: new FormControl('', [Validators.required]),
      idCurso: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.datosAlumnos$ = this._alumnosService.obtenerDatos();
    this.alumnoSubscription = this._alumnosService.alumnoSubject.subscribe(
      () => {
        this.datosAlumnos$ = this._alumnosService.obtenerDatos();
      }
    );
    this.datosCursos$ = this._cursosService.obtenerDatos();
    this.alumnoSubscription = this._cursosService.cursoSubject.subscribe(() => {
      this.datosCursos$ = this._cursosService.obtenerDatos();
    });
  }

  ngOnDestroy(): void {
    this.alumnoSubscription.unsubscribe();
  }

  reiniciarFormulario() {
    this.formularioInscripcion.reset();
    this.massage = null;
    this.dataSaved = false;
  }

  GuardarInscripcion() {
    this.dataSaved = true;
    const formInscripcion = this.formularioInscripcion.value;
    this._inscripcionesService
      .agregarInscripcion(formInscripcion)
      .subscribe((resp: any) => {
        this.store.dispatch(cargarInscripciones());
        setTimeout(() => {
          this.dataSaved = false;
          this.reiniciarFormulario();
        }, 300);
      });
  }
}
