import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { Console, log } from 'console';
import { TokenServiceService } from '../../../services/token-service.service';

@Component({
  selector: 'app-cperfil',
  standalone: true,
  imports: [],
  templateUrl: './cperfil.component.html',
  styleUrl: './cperfil.component.css'
})
export class CperfilComponent {
  usuario: string = '...';
  nombre: string = '...';
  apellido: string = '...';
  correo: string = '...';
  edad: number = 0; // Suponiendo que la edad es un número
  contrasena: string = '...'; // Suponiendo que la contraseña es un string

  constructor(private servicio_http: AxiosHandlerService, private datoscompartidos: DatosCompartidosService, private tokenservice: TokenServiceService) {
   }

   ngOnInit(): void {
    this.obtener();
  }

  obtener(){
      const auxiliar1 = 'http://localhost:8080/api/javeriana/grupo25/cliente/'
      const clienteId = this.datoscompartidos.cliente?.id;
      const url = auxiliar1 + (clienteId !== null ? clienteId.toString() : '');
      console.log("esta es la url: " + url);
      this.servicio_http.getDatat(url)
      .then(response => {
        this.datoscompartidos.setCliente(response.data);
        console.log("PROBANDO: " + response.data.id)
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
}
