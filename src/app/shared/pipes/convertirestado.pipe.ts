import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirestado',
})
export class ConvertirestadoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    return value === 1 || value === '1' ? 'Activo' : 'Inactivo';
  }
}
