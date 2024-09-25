import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventoDTO } from '../../modelo/evento-dto';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'] // Cambié 'styleUrl' a 'styleUrls'
})

export class EventoComponent {
  eventoDTO: EventoDTO;
  errorMessages: { [key: string]: string } = {};
  eventForm: FormGroup;
nombre: any;
artista: any;
fecha: any;
direccion: any;
ciudad: any;
tipo: any;

  constructor(private fb: FormBuilder) {
    this.eventoDTO = new EventoDTO();

    // Inicializar el formulario reactivo con todos los campos
    this.eventForm = this.fb.group({
      nombre: ['', Validators.required],
      artista: ['', Validators.required],
      descripcion: [''],
      fecha: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      vip: [0, Validators.min(0)],
      general: [0, Validators.min(0)],
      platea: [0, Validators.min(0)],
      tipo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log('Formulario válido', this.eventForm.value);
      // Lógica para manejar el envío del formulario
    } else {
      // Manejo de errores si el formulario no es válido
      this.errorMessages = {
        nombre: 'El nombre es requerido',
        artista: 'El nombre del artista es requerido',
        fecha: 'La fecha es requerida',
        direccion: 'La dirección es requerida',
        ciudad: 'La ciudad es requerida',
        tipo: 'El tipo de evento es requerido'
      };
    }
  }
}


