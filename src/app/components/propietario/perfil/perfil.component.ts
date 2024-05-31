import { Component } from '@angular/core';
import { AxiosHandlerService } from '../../../services/axios-handler.service';
import { DatosCompartidosService } from '../../../services/datos-compartidos.service';
import { TokenServiceService } from '../../../services/token-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  usuario: string = '...';
  nombre: string = '...';
  apellido: string = '...';
  correo: string = '...';
  edad: number = 0; // Suponiendo que la edad es un número
  contrasena: string = '...'; // Suponiendo que la contraseña es un string

  constructor(private servicio_http: AxiosHandlerService, private datoscompartidos: DatosCompartidosService, private tokenservice: TokenServiceService, private router: Router) {
   }

   ngOnInit(): void {
    this.obtener();
  }

  obtener(){
      const auxiliar1 = 'http://localhost:8080/api/javeriana/grupo25/propietario/'
      const clienteId = this.datoscompartidos.Propietario?.id;
      const url = auxiliar1 + (clienteId !== null ? clienteId.toString() : '');
      console.log("esta es la url: " + url);
      this.servicio_http.getDatat(url)
      .then(response => {
        console.log("Respuesta del servidor:", response); // Nuevo log
            if (response) {
                this.datoscompartidos.setPropietario(response);
                console.log("PROBANDO: " + response.id);
                this.obtenerDatosUsuario();
            } else {
                console.error("Respuesta sin datos:", response.id); // Nuevo log
            }
      })
      .catch(error => {
        console.error(error);
      });
  }
  obtenerDatosUsuario(): void {
    if (this.datoscompartidos.cliente) {
      this.usuario = this.datoscompartidos.Propietario.usuario || this.usuario;
      this.nombre = this.datoscompartidos.Propietario.nombre || this.nombre;
      this.apellido = this.datoscompartidos.Propietario.apellido || this.apellido;
      this.correo = this.datoscompartidos.Propietario.correo || this.correo;
      this.edad = this.datoscompartidos.Propietario.edad || this.edad;
      this.contrasena = this.datoscompartidos.Propietario.contrasena || this.contrasena;
    }
  }
  cambiarDatosUsu(): void{
    this.router.navigate(['/p_propietario/cambiar'])
  }
}
