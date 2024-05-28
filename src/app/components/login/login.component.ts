import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Propietario } from '../../models/Propietario.model';
import { Cliente } from '../../models/Cliente.model';
import { AxiosHandlerService } from '../../services/axios-handler.service';
import { DatosCompartidosService } from '../../services/datos-compartidos.service';
import { TokenServiceService } from '../../services/token-service.service';
import { Token } from '../../models/token';
import { Token2 } from '../../models/token2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cliente: Cliente = new Cliente(null, '', '', '', '', '', 0, 0, false, []);
  Propietario: Propietario = new Propietario(null, '','','','','',0,0,false,[]);
  token1: Token = new Token(null, null);
  token2: Token2 = new Token2(null, null);
  
  constructor(private router: Router, private servico_http: AxiosHandlerService, private servio_compartido: DatosCompartidosService, private tokenservice: TokenServiceService) {}

  IraRegistrarse(){
    this.router.navigate(['/reg']);
  }
  verificar(){
    this.cliente.usuario = (<HTMLInputElement>document.getElementById('usuario')).value;
    this.cliente.contrasena = (<HTMLInputElement>document.getElementById('contrasena')).value;
    this.Propietario.usuario = (<HTMLInputElement>document.getElementById('usuario')).value;
    this.cliente.contrasena = (<HTMLInputElement>document.getElementById('contrasena')).value;
    this.postCliente(this.cliente)
  }
  postCliente(cliente: Cliente): void{
    this.servico_http.postData('http://localhost:8080/api/javeriana/grupo25/aux/cliente/login', cliente)
    .then(response => {
      
      this.servio_compartido.setCliente(response.data)
      if(this.servio_compartido.cliente.id == null){
        this.postPropietario(this.Propietario)
      }
      else{
        this.servico_http.postData("http://localhost:8080/api/javeriana/grupo25/jwt/authcliente", this.servio_compartido.cliente)
        .then(response =>{
          this.token1 = response.data
          console.log(" MAS PRUEBAS " + this.token1.token)
          if(this.token1.token != null){
            this.tokenservice.setToken(this.token1.token);
            this.navigate1()
          }
          else{
            console.log("problemas con el token")
          }
        })
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
  postPropietario(propitario: Propietario): void{
    this.servico_http.postData('http://localhost:8080/api/javeriana/grupo25/aux/propietario/login', propitario)
    .then(response => {
      this.servio_compartido.setPropietario(response.data);
      if(this.servio_compartido.Propietario.id == null){
        console.log("no existe")
      }
      else{
        console.log("LLEGUE AQUI ")
        this.servico_http.postData("http://localhost:8080/api/javeriana/grupo25/jwt/authpropietario", this.servio_compartido.Propietario)
        .then(response =>{
          this.token2 = response.data
          if(this.token2.token != null){
            this.tokenservice.setToken(this.token2.token);
            this.navigate1()
          }
          else{
            console.log("problemas con el token")
          }
        })
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  navigate1(){
    this.router.navigate(['/p_cliente/cperfil']);
  }
  navigate2(){
    this.router.navigate(['/p_propietario/perfil']);
  }
}
