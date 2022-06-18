import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CursosService } from 'src/app/core/services/cursos.service';

@Pipe({
  name: 'convertirIdNombreCurso',
})
export class ConvertirIdNombreCursoPipe implements PipeTransform {
  constructor(private _cursoService: CursosService) {}

  transform(idCurso: number): Observable<any> {
    return this._cursoService.obtenerCurso(idCurso).pipe(
      map((response) => {
        return response.curso;
      })
    );
  }
}
