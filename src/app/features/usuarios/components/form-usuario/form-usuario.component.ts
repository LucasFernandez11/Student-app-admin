import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { cargarUsuarios } from '../../state/usuarios.actions';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent {
  dataSaved = false;
  massage = null;
  formularioUsuario!: FormGroup;

  constructor(
    private _usuariosService: UsuariosService,
    public fb: FormBuilder,
    public dialog: MatDialog,
    private store: Store
  ) {
    this.formularioUsuario = fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      rol: new FormControl('', [Validators.required]),
    });
  }

  reiniciarFormulario() {
    this.formularioUsuario.reset();
    this.massage = null;
    this.dataSaved = false;
  }

  GuardarUsuario() {
    this.dataSaved = true;
    const formalum = this.formularioUsuario.value;

    this._usuariosService.agregarUsuarios(formalum).subscribe((resp: any) => {
      this.store.dispatch(cargarUsuarios());
      setTimeout(() => {
        this.dataSaved = false;
        this.reiniciarFormulario();
      }, 300);
    });
  }
}
