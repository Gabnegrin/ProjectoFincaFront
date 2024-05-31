import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { Router } from '@angular/router';
import { Solicitud } from '../../../models/Solicitud.model';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent {
  usuario: string = '...';
  nombre: string = '...';
  apellido: string = '...';
  correo: string = '...';
  edad: number = 0; // Suponiendo que la edad es un número
  contrasena: string = '...'; // Suponiendo que la contraseña es un string

  solicitudes: Solicitud[] = []; // Array to store Solicitud objects
  
  constructor(private servicio_http: AxiosHandlerService, private datoscompartidos: DatosCompartidosService, private roter: Router) {
  }

  ngOnInit(): void {
   this.obtener();
   this.obtener2();
 }

 obtener(){
   const auxiliar1 = 'http://localhost:8080/api/javeriana/grupo25/propietario/'
     const clienteId = this.datoscompartidos.Propietario?.id;
     const url = auxiliar1 + (clienteId !== null ? clienteId.toString() : '');
     console.log("esta es la utl" + url);
     this.servicio_http.getDatat(url)
     .then(response => {
       this.datoscompartidos.setPropietario(response);
       this.obtenerDatosUsuario();

     })
     .catch(error => {
       console.error(error);
     });
 }
 obtenerDatosUsuario(): void {
   if (this.datoscompartidos.cliente) {
     this.usuario = this.datoscompartidos.Propietario.usuario || this.usuario;
     this.nombre = this.datoscompartidos.Propietario.nombre || this.nombre;
     this.apellido = this.datoscompartidos.Propietario.apellido || this.apellido;
     this.correo = this.datoscompartidos.Propietario.correo || this.correo;
     this.edad = this.datoscompartidos.Propietario.edad || this.edad;
     this.contrasena = this.datoscompartidos.Propietario.contrasena || this.contrasena;
   }
 }
 obtener2(): void {
  const auxiliar1 = 'http://localhost:8080/api/javeriana/grupo25/aux/solicitud/propietario/';
  const clienteId = this.datoscompartidos.Propietario?.id;
  const url = auxiliar1 + (clienteId !== null ? clienteId.toString() : '');
  console.log("esta es la utl" + url);

  this.servicio_http.getDatat(url)
    .then(response => {
      // Parse the JSON response and create an array of Solicitud objects
      this.solicitudes = response.map((solicitudData: any) => {
        return new Solicitud(
          solicitudData.id,
          solicitudData.c_cliente,
          solicitudData.c_propietario,
          solicitudData.c_propiedad,
          solicitudData.preciot,
          solicitudData.entrada,
          solicitudData.salida,
          solicitudData.estado,
          solicitudData.eliminado,
          solicitudData.estado,
          solicitudData.tipo,
        );
      });
      console.log("Solicitudes:", this.solicitudes);
    })
    .catch(error => {
      console.error(error);
    });
  }
  obtenerSolcitud(Solicitud: Solicitud): void{
    this.datoscompartidos.setSolicitud(Solicitud);
    this.roter.navigate(["/p_propietario/itsolicitud"])
  }
}
