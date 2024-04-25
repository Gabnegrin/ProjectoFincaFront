import { Solicitud } from './Solicitud.model';

export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    usuario: string;
    contrasena: string;
    edad: number;
    calificacion: number;
    eliminado: boolean;
    solicitudes: Solicitud[];
    
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
      solicitudes: Solicitud[]
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
      this.solicitudes = solicitudes;
    }
  }
  