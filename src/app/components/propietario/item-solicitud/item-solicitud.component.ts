import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';

@Component({
  selector: 'app-item-solicitud',
  standalone: true,
  imports: [],
  templateUrl: './item-solicitud.component.html',
  styleUrl: './item-solicitud.component.css'
})
export class ItemSolicitudComponent {
  calificacion_cliente: number = 0;
  calificacion_propietario: number = 0;
  calificacion_propiedad: number = 0;
  precio_total: number = 0;
  fecha_entrada: Date = new Date();
  fecha_salida: Date = new Date();
  estado: number = 1;

  constructor(private router: Router, private datoscompartidos: DatosCompartidosService){}

  ngOnInit(): void {
    this.obtener();
  }
  obtener(){
    if (this.datoscompartidos.cliente) {
      this.calificacion_cliente = this.datoscompartidos.Solicitud.c_cliente || this.calificacion_cliente;
      this.calificacion_propietario = this.datoscompartidos.Solicitud.c_propietario || this.calificacion_propietario;
      this.calificacion_propiedad = this.datoscompartidos.Solicitud.c_propiedad || this.calificacion_propiedad;
      this.precio_total = this.datoscompartidos.Solicitud.preciot || this.precio_total;
      this.fecha_entrada = this.datoscompartidos.Solicitud.entrada || this.fecha_entrada;
      this.fecha_salida = this.datoscompartidos.Solicitud.salida || this.fecha_salida;
      this.estado = this.datoscompartidos.Solicitud.estado || this.estado;
    }
  }
  calificar(){
    this.router.navigate(["/p_propietario/calificar"]);
  }
}
