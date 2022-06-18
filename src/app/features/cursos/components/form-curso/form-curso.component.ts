import { Component, Injectable, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { CursosService } from 'src/app/core/services/cursos.service';
import { cargarCursos } from '../../state/curso.actions';
import { DashboardCursosComponent } from '../dashboard-cursos/dashboard-cursos.component';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css'],
})
export class FormCursoComponent {
  dataSaved = false;
  massage = null;

  formularioCurso!: FormGroup;

  constructor(
    private _cursosService: CursosService,
    public fb: FormBuilder,
    public dialog: MatDialog,
    private store: Store
  ) {
    this.formularioCurso = fb.group({
      curso: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      horas: new FormControl('', [Validators.required]),
    });
  }

  reiniciarFormulario() {
    this.formularioCurso.reset();
    this.massage = null;
    this.dataSaved = false;
  }

  GuardarCurso() {
    this.dataSaved = true;
    const formalum = this.formularioCurso.value;

    this._cursosService.agregarCursos(formalum).subscribe((resp: any) => {
      this.store.dispatch(cargarCursos());
      setTimeout(() => {
        this.dataSaved = false;
        this.reiniciarFormulario();
      }, 300);
    });
  }
}
