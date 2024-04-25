import { Cliente } from './Cliente.model';
import { Propiedad } from './Propiedad.model';


export class Solicitud {
  id: number;
  c_cliente: number;
  c_propietario: number;
  c_propiedad: number;
  preciot: number;
  entrada: Date;
  salida: Date;
  estado: number;
  eliminado: boolean;
  cliente: Cliente;
  propiedad2: Propiedad;
  
  constructor(
    id: number,
    c_cliente: number,
    c_propietario: number,
    c_propiedad: number,
    preciot: number,
    entrada: Date,
    salida: Date,
    estado: number,
    eliminado: boolean,
    cliente: Cliente,
    propiedad2: Propiedad
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
