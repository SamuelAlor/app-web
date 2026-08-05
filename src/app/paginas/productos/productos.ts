import { AsyncPipe } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProductosServicio } from '../../servicios/productos';
import { FavoritosServicio } from '../../servicios/favoritos';
import { Producto } from '../../modelos/producto';
import { TarjetaProducto } from '../../compartidos/tarjeta-producto/tarjeta-producto';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [AsyncPipe, RouterLink, ButtonModule, TarjetaProducto],
  templateUrl: './productos.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './productos.css',
})
export class Productos {
  private readonly productosServicio = inject(ProductosServicio);
  readonly favoritosServicio = inject(FavoritosServicio);
  readonly productos = this.productosServicio.obtenerProductos();

  agregarAFavoritos(producto: Producto): void {
    this.favoritosServicio.agregar(producto);
  }
}
