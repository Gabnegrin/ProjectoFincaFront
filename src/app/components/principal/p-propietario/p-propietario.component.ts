import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../propietario/header/header.component';
import { FooterComponent } from '../../footer/footer.component';


@Component({
  selector: 'app-p-propietario',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './p-propietario.component.html',
  styleUrl: './p-propietario.component.css'
})
export class PPropietarioComponent {

}
