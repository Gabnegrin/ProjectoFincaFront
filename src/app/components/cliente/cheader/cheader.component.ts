import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheader',
  standalone: true,
  imports: [],
  templateUrl: './cheader.component.html',
  styleUrl: './cheader.component.css'
})
export class CheaderComponent {
  constructor(private router: Router) { 
  }

  Irabuscar(){
    this.router.navigate(['/p_cliente/cbuscar']);
  }
  Irasolicitudes(){
    this.router.navigate(['/p_cliente/csolicitudes']);
  }
  Iraperfil(){
    this.router.navigate(['/p_cliente/cperfil']);
  }
}
