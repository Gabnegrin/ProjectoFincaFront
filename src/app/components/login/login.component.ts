import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Propietario } from '../../models/Propietario.model';
import { Cliente } from '../../models/Cliente.model';
import { AxiosHandlerService } from '../../services/axios-handler.service';
import { DatosCompartidosService } from '../../services/datos-compartidos.service';

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
  constructor(private router: Router, private servico_http: AxiosHandlerService, private servio_compartido: DatosCompartidosService) {}

  IraRegistrarse(){
    this.router.navigate(['/reg']);
  }
  verificar(){
    this.cliente.usuario = (<HTMLInputElement>document.getElementById('usuario')).value;
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
        this.router.navigate(['/p_cliente/cperfil']);
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
        this.router.navigate(['/p_propietario/perfil']);
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
}
