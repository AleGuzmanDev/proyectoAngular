
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-activacion-cuenta',
  templateUrl: './dialog-activacion-cuenta.component.html',
  styleUrls: ['./dialog-activacion-cuenta.component.css']
})
export class DialogActivacionCuentaComponent {

  codigoActivacion: string = '';
  tiempoRestante: string = '15:00'; // Temporizador inicial

  constructor(public dialogRef: MatDialogRef<DialogActivacionCuentaComponent>) {
    this.iniciarTemporizador();
  }

  activarCuenta(): void {
    // Aquí va la lógica para activar la cuenta usando el código ingresado
    if (this.codigoActivacion) {
      console.log('Código ingresado:', this.codigoActivacion);
      // Puedes cerrar el dialog una vez activada la cuenta
      this.dialogRef.close();
    } else {
      console.log('Por favor ingresa un código válido.');
    }
  }

  iniciarTemporizador(): void {
    let minutos = 15;
    let segundos = 0;
    const intervalo = setInterval(() => {
      if (segundos === 0) {
        if (minutos === 0) {
          clearInterval(intervalo);
          this.tiempoRestante = 'Tiempo expirado';
          return;
        } else {
          minutos--;
          segundos = 59;
        }
      } else {
        segundos--;
      }
      this.tiempoRestante = `${minutos}:${segundos < 10 ? '0' + segundos : segundos}`;

    }, 1000);
  }
}