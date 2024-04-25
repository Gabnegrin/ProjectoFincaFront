import { Injectable } from '@angular/core';
import { PropietarioDTO } from '../models/PropietarioDTO.model';
import { ClienteDTO } from '../models/ClienteDTO.model';

@Injectable({
  providedIn: 'root'
})
export class DatosCompartidosService {
  clienteDTO: ClienteDTO = new ClienteDTO(null, '', '', '', '', 0, 0, false);
  propietarioDTO: PropietarioDTO = new PropietarioDTO(null, '', '', '', '', 0, 0, false);

  constructor() { }

  setClienteDTO(clienteDTO: ClienteDTO) {
    this.clienteDTO = clienteDTO;
  }

  getClienteDTO(): ClienteDTO {
    return this.clienteDTO;
  }

  setPropietarioDTO(propietarioDTO: PropietarioDTO) {
    this.propietarioDTO = propietarioDTO;
  }

  getPropietarioDTO(): PropietarioDTO {
    return this.propietarioDTO;
  }
}
