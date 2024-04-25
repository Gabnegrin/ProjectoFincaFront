import { Propiedad } from './Propiedad.model';

export class Propietario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  usuario: string;
  contrasena: string;
  edad: number;
  calificacion: number;
  eliminado: boolean;
  propiedades: Propiedad[];
  
  constructor(
    id: number,
    nombre: string,
    apellido: string,
    correo: string,
    usuario: string,
    contrasena: string,
    edad: number,
    calificacion: number,
    eliminado: boolean,
    propiedades: Propiedad[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.edad = edad;
    this.calificacion = calificacion;
    this.eliminado = eliminado;
    this.propiedades = propiedades;
  }
}
