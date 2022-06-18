import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unirnombreapellido',
})
export class UnirnombreapellidoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    return value.nombres + ' ' + value.apellidos;
  }
}
