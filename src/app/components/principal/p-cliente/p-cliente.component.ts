import { Component } from '@angular/core';
import { CheaderComponent } from '../../cliente/cheader/cheader.component';
import { CperfilComponent } from '../../cliente/cperfil/cperfil.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-p-cliente',
  standalone: true,
  imports: [CheaderComponent, CperfilComponent, RouterOutlet, FooterComponent],
  templateUrl: './p-cliente.component.html',
  styleUrl: './p-cliente.component.css'
})
export class PClienteComponent {

}
