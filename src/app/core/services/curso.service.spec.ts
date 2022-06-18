import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { CursosService } from './cursos.service';
import { Curso } from '../models/curso';

describe('CursoService', () => {
  let service: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CursosService],
    });
    service = TestBed.inject(CursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Editar un curso', inject(
    [HttpTestingController, CursosService],
    (httpMock: HttpTestingController, cursosService: CursosService) => {
      const mockCurso: Curso[] = [
        {
          idCurso: 213,
          curso: 'Vuejs',
          descripcion: 'Curso de Vuejs',
          horas: '25',
        },
      ];
      const datosModificarCurso: Curso[] = [
        {
          idCurso: 214,
          curso: 'Angular',
          descripcion: 'Curso de Angular',
          horas: '21',
        },
      ];

      cursosService.editarCurso(datosModificarCurso[0]).subscribe((data) => {
        expect(data).toEqual(mockCurso);
      });

      const req = httpMock.expectOne({
        method: 'PUT',
        url: `https://62aa56c63b31438554461940.mockapi.io/Cursos/${datosModificarCurso[0].idCurso}`,
      });
      req.flush(mockCurso);

      expect(cursosService).toBeTruthy;
    }
  ));

  it('Agregar un curso', inject(
    [HttpTestingController, CursosService],
    (httpMock: HttpTestingController, cursosService: CursosService) => {
      const mockCurso: Curso[] = [
        {
          idCurso: 213,
          curso: 'Angular',
          descripcion: 'Curso de Angular',
          horas: '40',
        },
      ];
      const datosAgregarCurso: Curso[] = [
        {
          idCurso: 300,
          curso: 'React',
          descripcion: 'Curso de React',
          horas: '30',
        },
      ];

      cursosService.agregarCursos(datosAgregarCurso[0]).subscribe((data) => {
        expect(data).toEqual(mockCurso);
      });

      const req = httpMock.expectOne({
        method: 'POST',
        url: `https://62aa56c63b31438554461940.mockapi.io/Cursos`,
      });
      req.flush(mockCurso);

      expect(cursosService).toBeTruthy;
    }
  ));
});
