import { Component } from '@angular/core';

@Component({
  selector: 'app-admon-cupones',
  templateUrl: './admon-cupones.component.html',
  styleUrls: ['./admon-cupones.component.css']
})
export class AdmonCuponesComponent {
  // Lista de cupones
  coupons = [
    { code: 'NUEVO2024', discount: 15, expiration: '08/09/2024', type: 'Único', usage: '25/100', status: 'Activo' },
    { code: 'CURA2024', discount: 20, expiration: '29/08/2024', type: 'Individual', usage: '75/100', status: 'Inactivo' }
  ];

  // Historial de uso de cupones
  couponHistory = [
    { couponCode: 'NUEVO2024', user: 'Armando Casas', usageDate: '28/08/2024', event: 'Concierto de Rock al Parque' },
    { couponCode: 'CURA2024', user: 'Ananias Lucumi', usageDate: '19/08/2024', event: 'Concierto Banda Cura Metal' }
  ];

  // Variables para búsqueda en el historial de cupones
  searchQuery = '';
  filteredHistory = [...this.couponHistory];

  // Función para crear un nuevo cupón
  createCoupon() {
    alert('Función para crear un nuevo cupón.');
  }

  // Función para editar un cupón existente
  editCoupon(coupon: any) {
    alert(`Editando cupón: ${coupon.code}`);
  }

  // Función para eliminar un cupón existente
  deleteCoupon(coupon: any) {
    if (confirm(`¿Estás seguro de que deseas eliminar el cupón ${coupon.code}?`)) {
      this.coupons = this.coupons.filter(c => c !== coupon);
      alert('Cupón eliminado.');
    }
  }

  // Función para filtrar el historial de cupones
  filterHistory() {
    this.filteredHistory = this.couponHistory.filter(history =>
      history.couponCode.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
