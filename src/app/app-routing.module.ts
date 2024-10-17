import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { EventoComponent } from './pagina/evento/evento.component';
import { PerfilUsuarioComponent } from './pagina/perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  { path: "", component: InicioComponent},
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "evento", component: EventoComponent},
  { path: "perfilUsuario", component:  PerfilUsuarioComponent},
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

