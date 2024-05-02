import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { AxiosHandlerService } from '../../../services/axios-handler.service';

@Component({
  selector: 'app-ccalificar',
  standalone: true,
  imports: [],
  templateUrl: './ccalificar.component.html',
  styleUrl: './ccalificar.component.css'
})
export class CcalificarComponent {
  cali_propiet: number | null = null;
  cali_pripedad: number | null = null;
  aux: number = 0;
  aux1: number = 0;


  constructor(private router: Router, private datcompartido: DatosCompartidosService, private servico_http: AxiosHandlerService){ }

  calificar(){
    this.cali_propiet = parseInt((<HTMLInputElement>document.getElementById('cpropietario')).value,10);
    this.cali_pripedad = parseInt((<HTMLInputElement>document.getElementById('cpropiedad')).value,10);
    if(this.datcompartido.Solicitud.c_propiedad != null && this.cali_pripedad != null){
      this.aux = (this.cali_pripedad + this.datcompartido.Solicitud.c_propiedad)/2;
      this.datcompartido.Solicitud.c_propiedad = this.aux;
    }
    else if(this.datcompartido.Solicitud.c_propiedad == null && this.cali_pripedad != null){
      this.aux = this.cali_pripedad;
      this.datcompartido.Solicitud.c_propiedad = this.aux;
    }
    else{
      console.log("Ha ocurrido un error al tomar la calificacion de propiedad");
    }
    if(this.datcompartido.Solicitud.c_propietario != null && this.cali_propiet != null){
      this.aux1 = (this.cali_propiet + this.datcompartido.Solicitud.c_propietario)/2;
      this.datcompartido.Solicitud.c_propietario = this.aux1;
    }
    else if(this.datcompartido.Solicitud.c_propietario == null && this.cali_propiet != null){
      this.aux = this.cali_propiet;
      this.datcompartido.Solicitud.c_propietario = this.aux1;
    }
    else{
      console.log("Ha ocurrido un error al tomar la calificacion de propietario");
    }
    this.update();
  }
  update(){
    this.servico_http.putData('http://localhost:8080/api/javeriana/grupo25/solicitud', this.datcompartido.Solicitud)
    .then(response => {
      this.router.navigate(['/p_cliente/cperfil']);
    })
    .catch(error => {
      console.error(error);
    });
  }
}
