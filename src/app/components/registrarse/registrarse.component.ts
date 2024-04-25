import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Cliente } from '../../models/Cliente.model';
import { Propietario } from '../../models/Propietario.model';
import { PropietarioDTO } from '../../models/PropietarioDTO.model';
import { ClienteDTO } from '../../models/ClienteDTO.model';
import { AxiosHandlerService } from '../../services/axios-handler.service'

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
    cliente: Cliente = new Cliente(null, '', '', '', '', '', 0, 0, false, []);
    clienteDTO: ClienteDTO = new ClienteDTO(null, '','','','',0,0,false);
    Propietario: Propietario = new Propietario(null, '','','','','',0,0,false,[]);
    propietarioDTO: PropietarioDTO = new PropietarioDTO(null,'','','','',0,0,false);
    constructor(private router: Router, private axiosHandlerService: AxiosHandlerService) { }

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
      this.router.navigate(['/register']);
    } else if (tipoUsuario === 'propietario') {
      this.Propietario.nombre = (<HTMLInputElement>document.getElementById('nombre_usu')).value;
      this.Propietario.apellido = (<HTMLInputElement>document.getElementById('apellido_usu')).value;
      this.Propietario.correo = (<HTMLInputElement>document.getElementById('correo_usu')).value;
      this.Propietario.usuario = (<HTMLInputElement>document.getElementById('usuario_usu')).value;
      this.Propietario.contrasena = (<HTMLInputElement>document.getElementById('contrasena_usu')).value;
      this.Propietario.edad = parseInt((<HTMLInputElement>document.getElementById('edad_usu')).value, 10);
      this.postPropietario(this.Propietario);
      this.router.navigate(['/register']);
    } else {
      console.error('Tipo de usuario no válido');
    }
    }

    postPropietario(propietario: Propietario): void{
      this.axiosHandlerService.postData('http://gruposjaveriana.dynaco.co/api/javeriana/grupo25/cliente', propietario)
      .then(response => {
        this.propietarioDTO = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    }
    postCliente(cliente: Cliente): void{
      this.axiosHandlerService.postData('http://gruposjaveriana.dynaco.co/api/javeriana/grupo25/propiedad', cliente)
      .then(response => {
        this.clienteDTO = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    }

}
