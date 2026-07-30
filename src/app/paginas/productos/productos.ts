import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProductosServicio } from '../../servicios/productos';
import { TarjetaProducto } from '../../compartidos/tarjeta-producto/tarjeta-producto';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TarjetaProducto],
  templateUrl: './productos.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './productos.css',
})
export class Productos {
  private readonly productosServicio = inject(ProductosServicio);
  readonly productos = this.productosServicio.obtenerProductos();
}
