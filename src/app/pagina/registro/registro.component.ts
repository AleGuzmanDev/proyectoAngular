import { Component } from '@angular/core';
import { RegistroUsuarioDTO } from '../../modelo/registro-usuario-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroUsuarioDTO: RegistroUsuarioDTO;
  errorMessages: { [key: string]: string } = {};

  constructor() {
    this.registroUsuarioDTO = new RegistroUsuarioDTO();
  }

  public registrar() {
    if (this.validarFormulario()) {
      console.log(this.registroUsuarioDTO);
      // Aquí iría la lógica para enviar los datos al servidor
      // Por ejemplo: this.usuarioService.registrar(this.registroUsuarioDTO).subscribe(...)
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