import { Propiedad } from './Propiedad.model';

export class Propietario {
  id: number | null;
  nombre: string | null;
  apellido: string | null;
  correo: string | null;
  usuario: string | null;
  contrasena: string | null;
  edad: number | null;
  calificacion: number | null;
  eliminado: boolean | null;
  propiedades: Propiedad[] | null;
  
  constructor(
    id: number | null = null,
    nombre: string | null = null,
    apellido: string | null = null,
    correo: string | null = null,
    usuario: string | null = null,
    contrasena: string | null = null,
    edad: number | null = null,
    calificacion: number | null = null,
    eliminado: boolean | null = null,
    propiedades: Propiedad[] | null = null
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
