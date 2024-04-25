
export class PropietarioDTO {
  id: number | null;
  nombre: string;
  apellido: string;
  correo: string;
  usuario: string;
  edad: number;
  calificacion: number;
  eliminado: boolean;

  constructor(
    id: number | null = null,
    nombre: string,
    apellido: string,
    correo: string,
    usuario: string,
    edad: number,
    calificacion: number,
    eliminado: boolean,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.usuario = usuario;
    this.edad = edad;
    this.calificacion = calificacion;
    this.eliminado = eliminado;
  }
}
