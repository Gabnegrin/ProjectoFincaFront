import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { Cliente } from '../../../models/Cliente.model';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { TokenServiceService } from '../../../services/token-service.service';

@Component({
  selector: 'app-ccambiar',
  standalone: true,
  imports: [],
  templateUrl: './ccambiar.component.html',
  styleUrl: './ccambiar.component.css'
})
export class CcambiarComponent {
  cliente: Cliente = new Cliente(null, null, null, null, null, null, null, 0, false, null)
  constructor(private router: Router, private axiosHandlerService: AxiosHandlerService, private datoscompartidos: DatosCompartidosService, private tokenservice: TokenServiceService) { 
      console.log('Llegue aqui')
  }

    Iracomponente(){
    this.cliente.id = this.datoscompartidos.cliente.id;
    this.cliente.nombre = (<HTMLInputElement>document.getElementById('nombre_usu')).value;
    this.cliente.apellido = (<HTMLInputElement>document.getElementById('apellido_usu')).value;
    this.cliente.correo = (<HTMLInputElement>document.getElementById('correo_usu')).value;
    this.cliente.usuario = (<HTMLInputElement>document.getElementById('usuario_usu')).value;
    this.cliente.contrasena = (<HTMLInputElement>document.getElementById('contrasena_usu')).value;
    this.cliente.edad = parseInt((<HTMLInputElement>document.getElementById('edad_usu')).value, 10);
    this.postCliente(this.cliente);
    }

    postCliente(cliente: Cliente){
      if(cliente.id != null){
        this.axiosHandlerService.putDatat("http://localhost:8080/api/javeriana/grupo25/cliente", cliente)
        .then(response => {
          this.router.navigate(['/p_cliente/cperfil']);
        })
        .catch(error => {
          console.error(error);
        });
      }
      else{
        console.log("Ha habido un error con el id de cliente");
      }
    }
}
