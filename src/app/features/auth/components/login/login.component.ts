import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';
import { cargarSesion, loginAction } from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLogin!: FormGroup;

  isLoginFailed = false;
  roles: string[] = [];
  errorMessage = '';

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private ruta: Router,
    private store: Store
  ) {
    this.formLogin = fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
    });
  }

  onEnviar(event: Event) {
    event.preventDefault();
    const usuario = this.formLogin.value.usuario;
    const contrasena = this.formLogin.value.contrasena;
    this.authService
      .IniciarSesion(usuario, contrasena)
      .subscribe((data: Usuario) => {
        if (data) {
          this.store.dispatch(cargarSesion({ data }));

          this.authService.establecerSesion(true, data);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error de credenciales',
            confirmButtonColor: '#0D47A1',
          });
        }
      });
    this.store.dispatch(
      loginAction({ usuario: usuario, contrasena: contrasena })
    );
  }
}
