import { Routes } from '@angular/router';
import { MainregistrarseComponent } from './components/principal/mainregistrarse/mainregistrarse.component';
import { PClienteComponent } from './components/principal/p-cliente/p-cliente.component';
import { CperfilComponent } from './components/cliente/cperfil/cperfil.component';
import { LoginComponent } from './components/login/login.component';
import { BuscarComponent } from './components/cliente/buscar/buscar.component';
import { CsolicitudComponent } from './components/cliente/csolicitud/csolicitud.component';
import { CcalificarComponent } from './components/cliente/ccalificar/ccalificar.component';
import { CcambiarComponent } from './components/cliente/ccambiar/ccambiar.component';
import { CitemSolicitudComponent } from './components/cliente/citem-solicitud/citem-solicitud.component';
import { CsolicitudesComponent } from './components/cliente/csolicitudes/csolicitudes.component';
import { ItemBusquedaComponent } from './components/cliente/item-busqueda/item-busqueda.component';
import { PPropietarioComponent } from './components/principal/p-propietario/p-propietario.component';
import { AgregarPropiedadComponent } from './components/propietario/agregar-propiedad/agregar-propiedad.component';
import { CalificarComponent } from './components/propietario/calificar/calificar.component';
import { ItemPropiedadComponent } from './components/propietario/item-propiedad/item-propiedad.component';
import { ItemSolicitudComponent } from './components/propietario/item-solicitud/item-solicitud.component';
import { PerfilComponent } from './components/propietario/perfil/perfil.component';
import { PropiedadesComponent } from './components/propietario/propiedades/propiedades.component';
import { SolicitudesComponent } from './components/propietario/solicitudes/solicitudes.component';
import { CambiarComponent } from './components/propietario/cambiar/cambiar.component';
import { CambiarPropiedadComponent } from './components/propietario/cambiar-propiedad/cambiar-propiedad.component';


export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'reg', redirectTo: '/register', pathMatch: 'full'},
    { path: 'inicio', component: LoginComponent},
    { path: 'register', component: MainregistrarseComponent},
    { path: 'p_cliente', component: PClienteComponent,
        children: [
          { path: 'cperfil', component: CperfilComponent },
          { path: 'cbuscar', component:  BuscarComponent},
          { path: 'ccrearsolicitud', component:  CsolicitudComponent},
          { path: 'ccalificar', component:  CcalificarComponent},
          { path: 'ccambiar', component:  CcambiarComponent},
          { path: 'citem_solicitud', component:  CitemSolicitudComponent},
          { path: 'csolicitudes', component:  CsolicitudesComponent},
          { path: 'citbusqueda', component:  ItemBusquedaComponent},
        ]
      },
      { path: 'p_propietario', component: PPropietarioComponent,
        children: [
          { path: 'perfil', component: PerfilComponent },
          { path: 'calificar', component:  CalificarComponent},
          { path: 'cambiar', component:  CambiarComponent},
          { path: 'itsolicitud', component:  ItemSolicitudComponent},
          { path: 'solicitudes', component:  SolicitudesComponent},
          { path: 'agregar_propiedad', component:  AgregarPropiedadComponent},
          { path: 'item_propiedad', component:  ItemPropiedadComponent},
          { path: 'propiedades', component:  PropiedadesComponent},
          { path: 'cambiar_propiedad', component:  CambiarPropiedadComponent},
        ]
      },
];

    

