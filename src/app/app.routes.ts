import { Routes } from '@angular/router';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { AppComponent } from './app.component'
import { PClienteComponent } from './components/principal/p-cliente/p-cliente.component';
import { CperfilComponent } from './components/cliente/cperfil/cperfil.component';
import { PerfilComponent} from './components/propietario/perfil/perfil.component';
import { CheaderComponent } from './components/cliente/cheader/cheader.component';



export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: AppComponent},
    { path: 'register', component: RegistrarseComponent},
    { path: 'p_cliente', component: PClienteComponent,
        children: [
          { path: 'cheader', component: CheaderComponent },
          { path: 'cperfil', component: CperfilComponent },
        ]
      },
];

    

