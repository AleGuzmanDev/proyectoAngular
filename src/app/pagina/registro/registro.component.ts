import { Component } from '@angular/core';
import { RegistroUsuarioDTO } from '../../modelo/registro-usuario-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

registroUsuarioDTO!: RegistroUsuarioDTO;

constructor(){
  this.registroUsuarioDTO = new RegistroUsuarioDTO();
}

public registrar(){
  console.log(this.registroUsuarioDTO);
}

}
