import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { EventoComponent } from './pagina/evento/evento.component';
import { PerfilUsuarioComponent } from './pagina/perfil-usuario/perfil-usuario.component';
import {DatosPerfilUsuarioComponent} from './pagina/datos-perfil-usuario/datos-perfil-usuario.component';
import { AdmonAdministradorComponent } from './pagina/admon-administrador/admon-administrador.component';
import {AdmonEventosComponent} from './pagina/admon-eventos/admon-eventos.component';
import {AdmonCuponesComponent} from './pagina/admon-cupones/admon-cupones.component';
import { AdmonArtistasComponent } from './pagina/admon-artistas/admon-artistas.component';
import { ListaDeseosComponent } from './pagina/lista-deseos/lista-deseos.component';

const routes: Routes = [
  { path: "", component: InicioComponent},
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "evento", component: EventoComponent},
  { path: "perfilUsuario", component:  PerfilUsuarioComponent},
  { path: "datosPerfilUsuario", component: DatosPerfilUsuarioComponent},
  { path: "admonAdministrador", component: AdmonAdministradorComponent },
  { path: "admonEventos", component: AdmonEventosComponent},
  { path: "admonCupones", component: AdmonCuponesComponent},
  { path: "admonArtistas", component: AdmonArtistasComponent},
  { path: "listaDeseos", component: ListaDeseosComponent},
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

