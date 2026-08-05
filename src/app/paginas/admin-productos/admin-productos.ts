import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { Producto } from '../../modelos/producto';
import { ProductosApiServicio } from '../../servicios/productos-api';

@Component({
  selector: 'app-admin-productos',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    MessageModule,
    ProgressSpinnerModule,
    SelectButtonModule,
    TableModule
  ],
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AdminProductos {
  private readonly productosApiServicio = inject(ProductosApiServicio);

  readonly productos = signal<Producto[]>([]);
  readonly cargando = signal(false);
  readonly error = signal<string | null>(null);
  readonly vistaActual = signal<'tarjetas' | 'tabla'>('tabla');
  readonly opcionesVista = [
    { label: 'Tarjetas', value: 'tarjetas' },
    { label: 'Tabla', value: 'tabla' }
  ];
  readonly dialogoDetalle = signal(false);
  readonly dialogoEdicion = signal(false);
  readonly dialogoEliminacion = signal(false);
  readonly productoSeleccionado = signal<Producto | null>(null);
  readonly nombreNuevo = signal('');
  readonly descripcionNueva = signal('');
  readonly precioNuevo = signal<number | null>(null);
  readonly nombreEdicion = signal('');
  readonly descripcionEdicion = signal('');
  readonly precioEdicion = signal<number | null>(null);

  constructor() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando.set(true);
    this.error.set(null);

    this.productosApiServicio.listar().subscribe({
      next: (productos) => {
        this.productos.set(productos);
        this.cargando.set(false);
      },
      error: (error: Error) => {
        this.error.set(error.message);
        this.cargando.set(false);
      }
    });
  }

  crearProducto(): void {
    const nombre = this.nombreNuevo().trim();
    const descripcion = this.descripcionNueva().trim();
    const precio = this.precioNuevo();

    if (!nombre || !descripcion || precio === null || precio < 0) {
      this.error.set('Completa nombre, descripción y un precio válido para insertar el producto.');
      return;
    }

    this.cargando.set(true);
    this.error.set(null);
    this.productosApiServicio.crear({ nombre, descripcion, precio }).subscribe({
      next: () => {
        this.nombreNuevo.set('');
        this.descripcionNueva.set('');
        this.precioNuevo.set(null);
        this.cargarProductos();
      },
      error: (error: Error) => {
        this.error.set(error.message);
        this.cargando.set(false);
      }
    });
  }

  abrirDetalle(producto: Producto): void {
    this.productoSeleccionado.set(producto);
    this.dialogoDetalle.set(true);
  }

  abrirEdicion(producto: Producto): void {
    this.productoSeleccionado.set(producto);
    this.nombreEdicion.set(producto.nombre);
    this.descripcionEdicion.set(producto.descripcion);
    this.precioEdicion.set(producto.precio);
    this.dialogoEdicion.set(true);
  }

  guardarEdicion(): void {
    const producto = this.productoSeleccionado();
    const nombre = this.nombreEdicion().trim();
    const descripcion = this.descripcionEdicion().trim();
    const precio = this.precioEdicion();

    if (!producto || !nombre || !descripcion || precio === null || precio < 0) {
      this.error.set('Completa nombre, descripción y un precio válido para guardar los cambios.');
      return;
    }

    this.cargando.set(true);
    this.error.set(null);
    this.productosApiServicio.actualizar(producto.id, { nombre, descripcion, precio }).subscribe({
      next: () => {
        this.dialogoEdicion.set(false);
        this.productoSeleccionado.set(null);
        this.cargarProductos();
      },
      error: (error: Error) => {
        this.error.set(error.message);
        this.cargando.set(false);
      }
    });
  }

  abrirDialogoEliminar(producto: Producto): void {
    this.productoSeleccionado.set(producto);
    this.dialogoEliminacion.set(true);
  }

  confirmarEliminacion(): void {
    const producto = this.productoSeleccionado();

    if (!producto) {
      return;
    }

    this.cargando.set(true);
    this.error.set(null);
    this.productosApiServicio.eliminar(producto.id).subscribe({
      next: () => {
        this.dialogoEliminacion.set(false);
        this.productoSeleccionado.set(null);
        this.cargarProductos();
      },
      error: (error: Error) => {
        this.error.set(error.message);
        this.cargando.set(false);
      }
    });
  }

  cerrarDialogos(): void {
    this.productoSeleccionado.set(null);
  }
}
