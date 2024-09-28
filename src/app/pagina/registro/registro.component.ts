import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../../dialog-content/dialog-content.component';
import { RegistroUsuarioDTO } from '../../modelo/registro-usuario-dto';
import { DialogActivacionCuentaComponent } from '../../dialog-activacion-cuenta/dialog-activacion-cuenta.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroUsuarioDTO: RegistroUsuarioDTO;
  errorMessages: { [key: string]: string } = {};

  constructor(public dialog: MatDialog) {
    this.registroUsuarioDTO = new RegistroUsuarioDTO();
  }

  abrirDialogActivacionCuenta(): void {
    this.dialog.open(DialogActivacionCuentaComponent, {width: '400px'});
  }

    

  public registrar() {
    if (this.validarFormulario()) {
      console.log(this.registroUsuarioDTO);
      console.log("Se enviará un correo a la dirección que registraste para que autentiques tu cuenta.")
      // Aquí iría la lógica para enviar los datos al servidor
      // this.registroUsuarioDTO.registrar(this.registroUsuarioDTO);
    }
  }

  public sonIguales(): boolean {
    return this.registroUsuarioDTO.password === this.registroUsuarioDTO.confirmaPassword;
  }

  private validarFormulario(): boolean {
    this.errorMessages = {};
    let isValid = true;

    if (!this.registroUsuarioDTO.cedula) {
      this.errorMessages['cedula'] = 'La cédula es requerida';
      isValid = false;
    }

    if (!this.registroUsuarioDTO.nombre) {
      this.errorMessages['nombre'] = 'El nombre es requerido';
      isValid = false;
    }

    if (!this.registroUsuarioDTO.email) {
      this.errorMessages['email'] = 'El correo electrónico es requerido';
      isValid = false;
    } else if (!this.validarEmail(this.registroUsuarioDTO.email)) {
      this.errorMessages['email'] = 'El correo electrónico no es válido';
      isValid = false;
    }

    if (!this.registroUsuarioDTO.password) {
      this.errorMessages['password'] = 'La contraseña es requerida';
      isValid = false;
    }

    if (!this.sonIguales()) {
      this.errorMessages['confirmaPassword'] = 'Las contraseñas no coinciden';
      isValid = false;
    }

    return isValid;
  }

  private validarEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }
}