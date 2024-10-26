import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css']
})
export class ListaDeseosComponent {
  // Lista inicial de eventos
  events = [
    { id: 'P009', name: 'Concierto de Rock', date: '14/09/2024', status: 'Pendiente', notify: true },
    { id: 'P010', name: 'ComicCon', date: '25/09/2024', status: 'Pendiente', notify: true },
    { id: 'P004', name: 'Música para planchar', date: '28/12/2024', status: 'Pendiente', notify: false }
  ];

  // Variables para la búsqueda y paginación
  searchQuery = '';
  filteredEvents = [...this.events];  // Lista de eventos filtrados (inicia con todos los eventos)
  currentPage = 1;
  itemsPerPage = 3;
  totalItems = this.events.length;

  constructor() {
    this.updatePagination();  // Llamamos a la función para inicializar la paginación
  }

  // Filtra los eventos en función de la búsqueda
  filterEvents(): void {
    this.filteredEvents = this.events.filter(event =>
      event.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.updatePagination();  // Actualiza la paginación después del filtro
  }

  // Muestra detalles del evento seleccionado
  viewEvent(event: any): void {
    alert(`Ver detalles del evento: ${event.name}`);
  }

  // Alterna la opción de recibir notificaciones por email
  toggleNotification(event: any): void {
    if (event.notify) {
      alert(`Recibirás notificaciones por email para el evento: ${event.name}`);
    } else {
      alert(`No recibirás notificaciones por email para el evento: ${event.name}`);
    }
  }

  // Calcula el ítem inicial para la paginación
  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  // Calcula el ítem final para la paginación
  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  // Función para ir a la página anterior en la paginación
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // Función para ir a la página siguiente en la paginación
  nextPage(): void {
    if (this.endItem < this.totalItems) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  // Actualiza la lista de eventos visibles según la paginación
  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.filteredEvents = this.events.slice(startIndex, endIndex);
  }
}
