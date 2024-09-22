import { Component } from '@angular/core';
import { LoginUsuarioDTO } from '../../modelo/login-usuario-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginUsuarioDTO: LoginUsuarioDTO;

constructor() {
  this.loginUsuarioDTO = new LoginUsuarioDTO();
 }

 public iniciarSesion(){
    console.log(this.loginUsuarioDTO)

 }

 

}
