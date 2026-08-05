import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Producto } from '../../modelos/producto';
import { TarjetaProducto } from '../../compartidos/tarjeta-producto/tarjeta-producto';
import { FavoritosServicio } from '../../servicios/favoritos';
import { ProductosServicio } from '../../servicios/productos';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [AsyncPipe, RouterLink, ButtonModule, TarjetaProducto],
  templateUrl: './productos.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './productos.css'
})
export class Productos {
  private readonly productosServicio = inject(ProductosServicio);

  readonly favoritosServicio = inject(FavoritosServicio);
  readonly productos = this.productosServicio.obtenerProductos();
  readonly error = signal<string | null>(null);

  constructor() {
    this.favoritosServicio.cargar().subscribe({
      error: (error: Error) => {
        this.error.set(error.message);
      }
    });
  }

  cambiarFavorito(producto: Producto): void {
    this.error.set(null);

    this.favoritosServicio.cambiar(producto).subscribe({
      error: (error: Error) => {
        this.error.set(error.message);
      }
    });
  }
}