import { Propietario } from './Propietario.model'; 
import { Solicitud } from './Solicitud.model'; 

export class Propiedad {
  id: number | null;
  nombre: string | null;
  visitas: number | null;
  calificacion: number | null;
  valordia: number | null;
  eliminado: boolean | null;
  propietario: Propietario | null; 
  solicitudes: Solicitud[] | null; 
  
  constructor(
    id: number | null = null,
    nombre: string | null = null,
    visitas: number | null = null,
    calificacion: number | null = null,
    valordia: number | null = null,
    eliminado: boolean | null = null,
    propietario: Propietario | null = null,
    solicitudes: Solicitud[] | null = null
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
