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
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { cargarAlumnos } from '../../state/alumnos.actions';
import { DashboardAlumnosComponent } from '../dashboard-alumnos/dashboard-alumnos.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild(DashboardAlumnosComponent) myTable!: MatTable<any>;
  dataSaved = false;
  massage = null;

  formularioAlumno!: FormGroup;

  constructor(
    private _mytable: DashboardAlumnosComponent,
    private _alumnosService: AlumnosService,
    public fb: FormBuilder,
    public dialog: MatDialog,
    private store: Store
  ) {
    this.formularioAlumno = fb.group({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dni: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      domicilio: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
    });
  }

  reiniciarFormulario() {
    this.formularioAlumno.reset();
    this.massage = null;
    this.dataSaved = false;
  }

  GuardarAlumno() {
    this.dataSaved = true;
    const formalum = this.formularioAlumno.value;

    this._alumnosService.agregarAlumnos(formalum).subscribe((resp: any) => {
      this.store.dispatch(cargarAlumnos());
      setTimeout(() => {
        this.dataSaved = false;
        this.reiniciarFormulario();
      }, 300);

      return;
    });
    return;
  }
}
