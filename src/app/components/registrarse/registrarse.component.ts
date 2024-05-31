import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Cliente } from '../../models/Cliente.model';
import { Propietario } from '../../models/Propietario.model';
import { AxiosHandlerService } from '../../services/axios-handler.service'
import { DatosCompartidosService } from '../../services/datos-compartidos.service'
import { TokenServiceService } from '../../services/token-service.service';


@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
    cliente: Cliente = new Cliente(null, null, null, null, null, null, 0, 0, false, null);
    Propietario: Propietario = new Propietario(null, null, null, null, null, null, 0, 0, false, null);
    url: string = "...";
    constructor(private router: Router, private axiosHandlerService: AxiosHandlerService, private datoscompartidos: DatosCompartidosService, private tokenservice: TokenServiceService) { 
      console.log('Llegue aqui')
    }

    Iracomponente(){
    const tipoUsuario = (<HTMLSelectElement>document.getElementById('tipoUsuario')).value;

    if (tipoUsuario === 'cliente') {
      this.cliente.nombre = (<HTMLInputElement>document.getElementById('nombre_usu')).value;
      this.cliente.apellido = (<HTMLInputElement>document.getElementById('apellido_usu')).value;
      this.cliente.correo = (<HTMLInputElement>document.getElementById('correo_usu')).value;
      this.cliente.usuario = (<HTMLInputElement>document.getElementById('usuario_usu')).value;
      this.cliente.contrasena = (<HTMLInputElement>document.getElementById('contrasena_usu')).value;
      this.cliente.edad = parseInt((<HTMLInputElement>document.getElementById('edad_usu')).value, 10);
      this.postCliente(this.cliente);
      
    } else if (tipoUsuario === 'propietario') {
      this.Propietario.nombre = (<HTMLInputElement>document.getElementById('nombre_usu')).value;
      this.Propietario.apellido = (<HTMLInputElement>document.getElementById('apellido_usu')).value;
      this.Propietario.correo = (<HTMLInputElement>document.getElementById('correo_usu')).value;
      this.Propietario.usuario = (<HTMLInputElement>document.getElementById('usuario_usu')).value;
      this.Propietario.contrasena = (<HTMLInputElement>document.getElementById('contrasena_usu')).value;
      this.Propietario.edad = parseInt((<HTMLInputElement>document.getElementById('edad_usu')).value, 10);
      this.postPropietario(this.Propietario);
      
    } else {
      console.error('Tipo de usuario no válido');
    }
    }

    postPropietario(propietario: Propietario): void{
      if(this.Propietario.usuario != null && this.Propietario.contrasena != null){
        this.url = "http://localhost:8080/api/javeriana/grupo25/propietario"
        this.axiosHandlerService.postData(this.url, propietario)
        .then(response => {
          this.datoscompartidos.setPropietario(response.data);
          this.axiosHandlerService.postData("http://localhost:8080/api/javeriana/grupo25/jwt/authpropietario", this.datoscompartidos.Propietario)
          .then(response =>{
            this.tokenservice.setToken(response.data.token);
            this.navigate2()
          })
        })
        .catch(error => {
          console.error(error);
        });
      }
      else{
        console.log("Usuario o contrasena es null");
      }
    }
    postCliente(cliente: Cliente): void{
      if(this.cliente.usuario != null && this.cliente.contrasena != null){
        this.url = "http://localhost:8080/api/javeriana/grupo25/cliente"
        this.axiosHandlerService.postData(this.url, cliente)
        .then(response => {
          this.datoscompartidos.setCliente(response.data);
          this.axiosHandlerService.postData("http://localhost:8080/api/javeriana/grupo25/jwt/authcliente", this.datoscompartidos.cliente)
          .then(response =>{
            console.log(response.data.token)
            this.tokenservice.setToken(response.data.token);
            this.navigate1()
          })
        })
        .catch(error => {
          console.error(error);
        });
      }
      else{
        console.log("alguno de los campos es null")
      }
    }

    navigate1(){
      this.router.navigate(['/p_cliente/cperfil']);
    }
    navigate2(){
      this.router.navigate(['/p_propietario/perfil']);
    }
}
