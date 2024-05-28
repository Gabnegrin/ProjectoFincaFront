import { Component } from '@angular/core';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { Solicitud } from '../../../models/Solicitud.model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csolicitudes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './csolicitudes.component.html',
  styleUrl: './csolicitudes.component.css'
})
export class CsolicitudesComponent {
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
   const auxiliar1 = 'http://localhost:8080/api/javeriana/grupo25/cliente/'
     const clienteId = this.datoscompartidos.cliente?.id;
     const url = auxiliar1 + (clienteId !== null ? clienteId.toString() : '');
     console.log("esta es la utl" + url);
     this.servicio_http.getDatat(url)
     .then(response => {
       this.datoscompartidos.setCliente(response.data);
       this.obtenerDatosUsuario();

     })
     .catch(error => {
       console.error(error);
     });
 }
 obtenerDatosUsuario(): void {
   if (this.datoscompartidos.cliente) {
     this.usuario = this.datoscompartidos.cliente.usuario || this.usuario;
     this.nombre = this.datoscompartidos.cliente.nombre || this.nombre;
     this.apellido = this.datoscompartidos.cliente.apellido || this.apellido;
     this.correo = this.datoscompartidos.cliente.correo || this.correo;
     this.edad = this.datoscompartidos.cliente.edad || this.edad;
     this.contrasena = this.datoscompartidos.cliente.contrasena || this.contrasena;
   }
 }
 obtener2(): void {
  const auxiliar1 = 'http://localhost:8080/api/javeriana/grupo25/aux/solicitud/cliente/';
  const clienteId = this.datoscompartidos.cliente?.id;
  const url = auxiliar1 + (clienteId !== null ? clienteId.toString() : '');
  console.log("esta es la utl" + url);

  this.servicio_http.getDatat(url)
    .then(response => {
      // Parse the JSON response and create an array of Solicitud objects
      this.solicitudes = response.data.map((solicitudData: any) => {
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
    this.roter.navigate(["/p_cliente/citem_solicitud"])
  }
}
