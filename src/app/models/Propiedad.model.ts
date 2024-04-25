import { Propietario } from './Propietario.model'; 
import { Solicitud } from './Solicitud.model'; 

export class Propiedad {
  id: number;
  nombre: string;
  visitas: number;
  calificacion: number;
  valordia: number;
  eliminado: boolean;
  propietario: Propietario; 
  solicitudes: Solicitud[]; 
  
  constructor(
    id: number,
    nombre: string,
    visitas: number,
    calificacion: number,
    valordia: number,
    eliminado: boolean,
    propietario: Propietario,
    solicitudes: Solicitud[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.visitas = visitas;
    this.calificacion = calificacion;
    this.valordia = valordia;
    this.eliminado = eliminado;
    this.propietario = propietario;
    this.solicitudes = solicitudes;
  }
}
