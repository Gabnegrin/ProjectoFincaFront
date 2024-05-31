import { Component } from '@angular/core';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { Router } from '@angular/router';
import { Propiedad } from '../../../models/Propiedad.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [NgFor],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  
  propiedades: Propiedad[] = [];
  
  constructor(private servicio_http: AxiosHandlerService, private datoscompartidos: DatosCompartidosService, private roter: Router) {
  }

  ngOnInit(): void {
   this.obtener2();
 }
 obtener2(): void {
  const auxiliar1 = 'http://localhost:8080/api/javeriana/grupo25/aux/propiedad/propietario/'
  const clienteId = this.datoscompartidos.Propietario?.id;
  const url = auxiliar1 + (clienteId !== null ? clienteId.toString() : '');
  this.servicio_http.getDatat(url)
    .then(response => {
      this.propiedades = response.map((propiedadData: any) => {
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
    this.roter.navigate(["/p_propietario/item_propiedad"])
  }
  agregar(){
    this.roter.navigate(["/p_propietario/agregar_propiedad"]);
  }
}
