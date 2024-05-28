import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente.model';
import { Propietario } from '../models/Propietario.model';
import { Solicitud } from '../models/Solicitud.model';
import { Propiedad } from '../models/Propiedad.model';

@Injectable({
  providedIn: 'root'
})
export class DatosCompartidosService {
  cliente: Cliente = new Cliente(null, null, null, null, null, null, 0, 0, false, null);
  Propietario: Propietario = new Propietario(null, null, null, null, null, null,0,0,false,null);
  Propiedad: Propiedad = new Propiedad(null, null, 1, 1, 1,false,null,null)
  Solicitud:Solicitud = new Solicitud(null, 123, 456, 789, 1000, new Date('2024-04-29'), new Date('2024-05-06'),1, false,this.cliente,this.Propiedad
  );

  constructor() { }

  setPropiedad(propeidad: Propiedad){
    this.Propiedad = propeidad;
  }
  getPropiedad(){
    return this.Propiedad;
  }

  setSolicitud(solicitude: Solicitud){
    this.Solicitud = solicitude;
  }

  getSolicitud(): Solicitud{
    return this.Solicitud
  }

  setCliente(clienteData: Cliente) {
    this.cliente = clienteData;
  }

  getCliente(): Cliente {
    return this.cliente;
  }

  setPropietario(propietario: Propietario) {
    this.Propietario = propietario;
  }

  getPropietario(): Propietario {
    return this.Propietario;
  }
}
