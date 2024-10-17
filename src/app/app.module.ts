import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { EventoComponent } from './pagina/evento/evento.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogActivacionCuentaComponent } from './dialog-activacion-cuenta/dialog-activacion-cuenta.component';
import { PerfilUsuarioComponent } from './pagina/perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    EventoComponent,
    DialogContentComponent,
    DialogActivacionCuentaComponent,
    PerfilUsuarioComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }

