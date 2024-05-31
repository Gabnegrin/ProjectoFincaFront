import { Cliente } from './Cliente.model';
import { Propiedad } from './Propiedad.model';


export class Solicitud {
  id: number | null;
  c_cliente: number | null;
  c_propietario: number | null;
  c_propiedad: number | null;
  preciot: number | null;
  entrada: Date | null;
  salida: Date | null;
  estado: number | null;
  eliminado: boolean| null;
  cliente: Cliente | null | number;
  propiedad2: Propiedad | null | number;
  
  constructor(
    id: number | null = null,
    c_cliente: number | null = null,
    c_propietario: number | null = null,
    c_propiedad: number | null = null,
    preciot: number | null = null,
    entrada: Date | null = null,
    salida: Date | null = null,
    estado: number | null = null,
    eliminado: boolean | null = null,
    cliente: Cliente | null | number = null,
    propiedad2: Propiedad | null | number= null
  ) {
    this.id = id;
    this.c_cliente = c_cliente;
    this.c_propietario = c_propietario;
    this.c_propiedad = c_propiedad;
    this.preciot = preciot;
    this.entrada = entrada;
    this.salida = salida;
    this.estado = estado;
    this.eliminado = eliminado;
    this.cliente = cliente;
    this.propiedad2 = propiedad2;
  }
}
