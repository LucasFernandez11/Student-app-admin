import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Pipe({
  name: 'convertirIdNombreAlumno',
})
export class ConvertirIdNombreAlumnoPipe implements PipeTransform {
  constructor(private _alumnoService: AlumnosService) {}

  transform(idAlumno: number): Observable<any> {
    return this._alumnoService.obtenerAlumno(idAlumno).pipe(
      map((response) => {
        return response.apellidos + ' ' + response.nombres;
      })
    );
  }
}
