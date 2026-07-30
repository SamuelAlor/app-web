import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../modelos/producto';

@Injectable({ providedIn: 'root' })
export class FavoritosServicio {
  private readonly favoritosInternos = signal<Producto[]>([]);
  readonly favoritos = this.favoritosInternos.asReadonly();
  readonly total = computed(() => this.favoritosInternos().length);

  agregar(producto: Producto): void {
    if (!this.existe(producto.id)) {
      this.favoritosInternos.update((favoritos) => [...favoritos, producto]);
    }
  }

  eliminar(id: number): void {
    this.favoritosInternos.update((favoritos) =>
      favoritos.filter((producto) => producto.id !== id)
    );
  }

  obtenerTodos() {
    return this.favoritos;
  }

  existe(id: number): boolean {
    return this.favoritosInternos().some((producto) => producto.id === id);
  }
}
