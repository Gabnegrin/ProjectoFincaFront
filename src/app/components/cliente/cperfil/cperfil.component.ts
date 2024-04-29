import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { Console, log } from 'console';
import { ClienteDTO } from '../../../models/ClienteDTO.model';

@Component({
  selector: 'app-cperfil',
  standalone: true,
  imports: [],
  templateUrl: './cperfil.component.html',
  styleUrl: './cperfil.component.css'
})
export class CperfilComponent {
  @ViewChild('usuario') usuarioElement: ElementRef | undefined;
  @ViewChild('nombre') nombreElement: ElementRef | undefined;
  @ViewChild('apellido') apellidoElement: ElementRef | undefined;
  @ViewChild('correo') correoElement: ElementRef | undefined;
  @ViewChild('edad') edadElement: ElementRef | undefined;
  @ViewChild('contrasena') contrasenaElement: ElementRef | undefined;

  constructor(private axiosHandlerService: AxiosHandlerService, private datoscompartidos: DatosCompartidosService) {
    console.log("llegue aqui")
    console.log(this.datoscompartidos.clienteDTO.usuario)
   }

  ngAfterViewInit() {
    this.rellenarValores();
    if (this.usuarioElement && this.usuarioElement.nativeElement) {
      this.usuarioElement.nativeElement.id = this.datoscompartidos.clienteDTO.usuario;
    }
  
    if (this.nombreElement && this.nombreElement.nativeElement) {
      this.nombreElement.nativeElement.id = this.datoscompartidos.clienteDTO.nombre;
    }
  
    if (this.apellidoElement && this.apellidoElement.nativeElement) {
      this.apellidoElement.nativeElement.id = this.datoscompartidos.clienteDTO.apellido;
    }
  
    if (this.correoElement && this.correoElement.nativeElement) {
      this.correoElement.nativeElement.id = this.datoscompartidos.clienteDTO.correo;
    }
  
    if (this.edadElement && this.edadElement.nativeElement) {
      this.edadElement.nativeElement.id = this.datoscompartidos.clienteDTO.edad;
    }
  }

  rellenarValores():void{
      const auxiliar1 = 'http://gruposjaveriana.dynaco.co/api/javeriana/grupo25/cliente/'
      const auxiliar2 = this.datoscompartidos.clienteDTO.id
      const auxiliar3 = auxiliar1 + auxiliar2?.toString
      
      this.axiosHandlerService.getData(auxiliar3)
      .then(response => {
        this.datoscompartidos.setClienteDTO(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
