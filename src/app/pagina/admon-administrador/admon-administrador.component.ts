import { Component } from '@angular/core';

@Component({
  selector: 'app-admon-administrador',
  templateUrl: './admon-administrador.component.html',
  styleUrls: ['./admon-administrador.component.css']
})
export class AdmonAdministradorComponent {
  // Datos iniciales del administrador
  adminData = {
    cedula: '12345874',
    nombre: 'Admin 1',
    direccion: 'Essos',
    telefono: '12345852',
    email: 'admin@email.com',
    password: '',
    confirmPassword: ''
  };

  // Función para manejar la acción de editar
  editAdmin() {
    alert('Modo de edición activado.');
  }

  // Función para manejar la acción de eliminar
  deleteAdmin() {
    if (confirm('¿Estás seguro de que deseas eliminar este administrador?')) {
      alert('Administrador eliminado.');
    }
  }

  // Función para guardar los cambios
  saveChanges() {
    if (this.adminData.password !== this.adminData.confirmPassword) {
      alert('Las contraseñas no coinciden.');
    } else {
      alert('Cambios guardados exitosamente.');
    }
  }
}
