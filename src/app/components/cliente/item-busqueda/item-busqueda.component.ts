import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';

@Component({
  selector: 'app-item-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './item-busqueda.component.html',
  styleUrl: './item-busqueda.component.css'
})
export class ItemBusquedaComponent {
  nombre: string = "";
  visitas: number = 0;
  calificacion: number = 0;
  valordia: number = 0;
  
  constructor(private router: Router, private datoscompa: DatosCompartidosService){}

  ngOnInit(): void {
    this.obtener();
  }
  obtener(){
    if (this.datoscompa.Propiedad) {
      this.nombre = this.datoscompa.Propiedad.nombre || this.nombre;
      this.visitas = this.datoscompa.Propiedad.visitas || this.visitas;
      this.calificacion = this.datoscompa.Propiedad.calificacion || this.calificacion;
      this.valordia = this.datoscompa.Propiedad.valordia || this.valordia;
      console.log("El id de propiedad es: " + this.datoscompa.Propiedad.id)
    }
  }

  arrendar(){
    this.router.navigate(['/p_cliente/ccrearsolicitud']);
  }
}
