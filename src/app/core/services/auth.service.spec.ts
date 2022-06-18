import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Usuario } from '../models/usuario';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('El login funciona correctamente', inject(
    [HttpTestingController, AuthService],
    (httpMock: HttpTestingController, authService: AuthService) => {
      const mockUsuario: Usuario[] = [
        {
          usuario: 'Stroman',
          contrasena: '1234',
          rol: 21,
          idUsuario: '213',
        },
      ];

      authService.IniciarSesion('Stroman', '1234').subscribe((data) => {
        expect(data.idUsuario).toEqual(mockUsuario[0].idUsuario);
      });

      const req = httpMock.expectOne({
        method: 'GET',
        url: 'https://62aa56c63b31438554461940.mockapi.io/Usuarios',
      });
      req.flush(mockUsuario);

      expect(authService).toBeTruthy;
    }
  ));

  it('Error de credenciales', inject(
    [HttpTestingController, AuthService],
    (httpMock: HttpTestingController, authService: AuthService) => {
      let variable: any = undefined;
      const mockUsuario: Usuario[] = [
        {
          usuario: 'Stroman',
          contrasena: '1234',
          rol: 21,
          idUsuario: '213',
        },
      ];

      authService.IniciarSesion('Stroman5', '12345').subscribe((data) => {
        expect(data).toEqual(variable);
      });

      const req = httpMock.expectOne({
        method: 'GET',
        url: 'https://62aa56c63b31438554461940.mockapi.io/Usuarios',
      });
      req.flush(mockUsuario);

      expect(authService).toBeTruthy;
    }
  ));
});
