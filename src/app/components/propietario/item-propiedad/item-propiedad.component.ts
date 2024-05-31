import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';

@Component({
  selector: 'app-item-propiedad',
  standalone: true,
  imports: [],
  templateUrl: './item-propiedad.component.html',
  styleUrl: './item-propiedad.component.css'
})
export class ItemPropiedadComponent {
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
    this.router.navigate(['/p_propietario/cambiar_propiedad']);
  }
}
