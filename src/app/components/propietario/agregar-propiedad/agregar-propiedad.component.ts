import { Component } from '@angular/core';
import { Propiedad } from '../../../models/Propiedad.model';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { TokenServiceService } from '../../../services/token-service.service';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-propiedad',
  standalone: true,
  imports: [],
  templateUrl: './agregar-propiedad.component.html',
  styleUrl: './agregar-propiedad.component.css'
})
export class AgregarPropiedadComponent {
  cliente: Propiedad = new Propiedad(null, null, null, null, null, false, null, null)
  constructor(private router: Router, private axiosHandlerService: AxiosHandlerService, private datoscompartidos: DatosCompartidosService, private tokenservice: TokenServiceService) { 
      console.log('Llegue aqui')
  }

  Iracomponente(){
  this.cliente.nombre = (<HTMLInputElement>document.getElementById('nombre_usu')).value;
  this.cliente.valordia = parseInt((<HTMLInputElement>document.getElementById('valor_usu')).value, 10);
  this.cliente.propietario = this.datoscompartidos.Propietario;
  this.postCliente(this.cliente);
  }

  postCliente(cliente: Propiedad){
    if(true){
      this.axiosHandlerService.postDatat("http://localhost:8080/api/javeriana/grupo25/propiedad", cliente)
      .then(response => {
        this.router.navigate(['/p_propietario/propiedades']);
      })
      .catch(error => {
        console.error(error);
      });
    }
    else{
      console.log("Ha habido un error con el id de propiedad");
    }
  }
}
