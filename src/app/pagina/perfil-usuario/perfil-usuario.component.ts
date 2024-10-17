import { Component, OnInit } from '@angular/core';
import { PerfilUsuarioDTO } from '../../modelo/perfil-usuario-dto';

interface Purchase {
  id: string;
  event: string;
  date: string;
  quantity: number;
  total: number;
  status: 'Completado' | 'Cancelado' | 'Pendiente';
  coupon?: string;
}

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit {
  perfilUsuarioDTO: PerfilUsuarioDTO;

  constructor(){
    this.perfilUsuarioDTO = new PerfilUsuarioDTO();
  }

  purchases: Purchase[] = [
    { id: 'P001', event: 'Concierto de Rock', date: '14/07/2022', quantity: 2, total: 150000, status: 'Completado', coupon: 'ROCK2024' },
    { id: 'P002', event: 'Festival de Jazz', date: '08/12/2023', quantity: 1, total: 80000, status: 'Cancelado' },
    { id: 'P003', event: 'Obra de Teatro', date: '20/01/2024', quantity: 3, total: 180000, status: 'Completado' },
    { id: 'P004', event: 'Música para planchar', date: '28/02/2024', quantity: 2, total: 100000, status: 'Completado', coupon: 'AMOR24' },
    { id: 'P005', event: 'ComicConn', date: '25/09/2024', quantity: 1, total: 120000, status: 'Pendiente', coupon: 'MARVEL5' }
  ];

  filteredPurchases: Purchase[] = [];
  activeTab: string = 'historial';
  searchTerm: string = '';

  ngOnInit(): void {
    this.filteredPurchases = [...this.purchases];
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Completado':
        return 'status-completed';
      case 'Cancelado':
        return 'status-cancelled';
      case 'Pendiente':
        return 'status-pending';
      default:
        return '';
    }
  }

  filterEvents(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredPurchases = this.purchases.filter(purchase => 
      purchase.event.toLowerCase().includes(searchTerm)
    );
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onPrevious(): void {
    // Implementar paginación previa
    console.log('Página anterior');
  }

  onNext(): void {
    // Implementar paginación siguiente
    console.log('Página siguiente');
  }
}