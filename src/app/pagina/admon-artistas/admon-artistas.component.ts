import { Component } from '@angular/core';

@Component({
  selector: 'app-admon-artistas',
  templateUrl: './admon-artistas.component.html',
  styleUrls: ['./admon-artistas.component.css']
})
export class AdmonArtistasComponent {
  // Lista de artistas
  artists = [
    { name: 'Banda Cura', genre: 'Rock', status: 'Disponible', email: 'cura@email.com', phone: '1234566' },
    { name: 'Diego Verdaguer', genre: 'Balada', status: 'Disponible', email: 'diegover@email.com', phone: '1234567' },
    { name: 'Circo del Sol', genre: 'Espectáculo', status: 'Disponible', email: 'circosol@email.com', phone: '1234586' },
    { name: 'Dimash Kudaibergen', genre: 'Tenor', status: 'Ocupado', email: 'dimash@email.com', phone: '1234569' },
    { name: 'Harry Houdini', genre: 'Magia', status: 'Disponible', email: 'houdinimag@email.com', phone: '6666566' }
  ];

  // Variables para búsqueda y paginación
  searchQuery = '';
  filteredArtists = [...this.artists];  // Inicialización de artistas filtrados
  currentPage = 1;
  itemsPerPage = 5;
  totalArtists = this.artists.length;

  // Calcular el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.totalArtists / this.itemsPerPage);
  }

  // Función para añadir un nuevo artista
  addArtist() {
    alert('Función para añadir un nuevo artista.');
  }

  // Función para editar un artista existente
  editArtist(artist: any) {
    alert(`Editando artista: ${artist.name}`);
  }

  // Función para eliminar un artista existente
  deleteArtist(artist: any) {
    if (confirm(`¿Estás seguro de que deseas eliminar al artista ${artist.name}?`)) {
      this.artists = this.artists.filter(a => a !== artist);
      this.filteredArtists = this.artists.slice();  // Actualizar la lista filtrada
      this.totalArtists = this.artists.length;
    }
  }

  // Función para filtrar artistas en base al nombre
  filterArtists() {
    this.filteredArtists = this.artists.filter(artist =>
      artist.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Funciones de paginación
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.filteredArtists = this.artists.slice(startIndex, endIndex);
  }
}

