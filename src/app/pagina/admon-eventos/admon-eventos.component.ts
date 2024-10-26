import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admon-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admon-eventos.component.html',
  styleUrl: './admon-eventos.component.css'
})

export class AdmonEventosComponent {

  eventos = [
    {
      nombre: 'Concierto de Rock',
      fecha: '14/07/2022',
      ubicacion: 'Estadio Centenario',
      precio: 150000,
      capacidad: 30000,
      tipo: 'Concierto',
      estado: 'Terminado'
    },
    {
      nombre: 'Concierto de Jazz',
      fecha: '14/07/2022',
      ubicacion: 'Estadio Centenario',
      precio: 150000,
      capacidad: 30000,
      tipo: 'Concierto',
      estado: 'Terminado'
    },
    {
      nombre: 'Regocijo Espiritual',
      fecha: '14/07/2022',
      ubicacion: 'Coliseo Mayor',
      precio: 150000,
      capacidad: 30000,
      tipo: 'Encuentro',
      estado: 'Terminado'
    },
    // ... más eventos
  ];

}
