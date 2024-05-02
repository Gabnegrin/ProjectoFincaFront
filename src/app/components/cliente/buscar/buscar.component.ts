import { Component } from '@angular/core';
import { Propiedad } from '../../../models/Propiedad.model';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  
  propiedades: Propiedad[] = []; // Array to store Solicitud objects
  
  constructor(private servicio_http: AxiosHandlerService, private datoscompartidos: DatosCompartidosService, private roter: Router) {
  }

  ngOnInit(): void {
   this.obtener2();
 }
 obtener2(): void {
  this.servicio_http.getData('http://localhost:8080/api/javeriana/grupo25/propiedad')
    .then(response => {
      this.propiedades = response.data.map((propiedadData: any) => {
        return new Propiedad(
          propiedadData.id,
          propiedadData.nombre,
          propiedadData.visitas,
          propiedadData.calificacion,
          propiedadData.valordia,
          propiedadData.eliminado,
          propiedadData.propietario,
          propiedadData.solicitud,
        );
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
  obtenerpropiedad(propiedad: Propiedad): void{
    this.datoscompartidos.setPropiedad(propiedad);
    this.roter.navigate(["/p_cliente/citbusqueda"])
  }
}
