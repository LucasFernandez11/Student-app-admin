export class Alumno {
  constructor(
    public idAlumno: string,
    public nombres: string,
    public apellidos: string,
    public email: string,
    public dni: number,
    public domicilio: string,
    public telefono: number
  ) {}
}
