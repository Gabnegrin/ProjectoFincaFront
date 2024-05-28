import { Component } from '@angular/core';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { Solicitud } from '../../../models/Solicitud.model';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csolicitud',
  standalone: true,
  imports: [],
  templateUrl: './csolicitud.component.html',
  styleUrl: './csolicitud.component.css'
})
export class CsolicitudComponent {
  constructor(private datosco: DatosCompartidosService, private servicio_http: AxiosHandlerService, private roter : Router){}

  Solicitud: Solicitud = new Solicitud(null, 0, 0, 0, 0, new Date('2024-04-29'), new Date('2024-05-06'),1, false,this.datosco.cliente,this.datosco.Propiedad);
  
  sooli(){
    this.datosco.Solicitud.entrada = (<HTMLInputElement>document.getElementById('fecha-entrada')).valueAsDate;
    this.datosco.Solicitud.salida = (<HTMLInputElement>document.getElementById('fecha-salida')).valueAsDate;
    this.crear_solicitud();
  }
  crear_solicitud(){
    this.servicio_http.postDatat('http://localhost:8080/api/javeriana/grupo25/solicitud', this.datosco.Solicitud)
    .then(response => {
      this.roter.navigate(['/p_cliente/cperfil']);
    })
    .catch(error => {
      console.error(error);
    });
  }
}

