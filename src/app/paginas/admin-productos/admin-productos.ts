import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { Categoria } from '../../modelos/categoria';
import { Producto } from '../../modelos/producto';
import { CategoriasServicio } from '../../servicios/categorias';
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
    SelectModule,
    SelectButtonModule,
    TableModule
  ],
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AdminProductos {
  private readonly productosApiServicio = inject(ProductosApiServicio);
  private readonly categoriasServicio = inject(CategoriasServicio);

  readonly productos = signal<Producto[]>([]);
  readonly categorias = signal<Categoria[]>([]);
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
  readonly categoriaNueva = signal<number | null>(null);

  readonly nombreEdicion = signal('');
  readonly descripcionEdicion = signal('');
  readonly precioEdicion = signal<number | null>(null);
  readonly categoriaEdicion = signal<number | null>(null);

  constructor() {
    this.cargarCategorias();
    this.cargarProductos();
  }

  cargarCategorias(): void {
    this.categoriasServicio.listar().subscribe({
      next: (categorias) => {
        this.categorias.set(categorias);

        if (
          this.categoriaNueva() === null &&
          categorias.length > 0
        ) {
          this.categoriaNueva.set(categorias[0].id);
        }
      },
      error: (error: Error) => {
        this.error.set(error.message);
      }
    });
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
    const categoriaId = this.categoriaNueva();

    if (
      !nombre ||
      !descripcion ||
      precio === null ||
      precio <= 0 ||
      categoriaId === null
    ) {
      this.error.set(
        'Completa nombre, descripción, precio y categoría.'
      );
      return;
    }

    this.cargando.set(true);
    this.error.set(null);

    this.productosApiServicio
      .crear({
        nombre,
        descripcion,
        precio,
        categoria_id: categoriaId
      })
      .subscribe({
        next: () => {
          this.nombreNuevo.set('');
          this.descripcionNueva.set('');
          this.precioNuevo.set(null);

          if (this.categorias().length > 0) {
            this.categoriaNueva.set(this.categorias()[0].id);
          }

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
    this.categoriaEdicion.set(producto.categoria_id);
    this.dialogoEdicion.set(true);
  }

  guardarEdicion(): void {
    const producto = this.productoSeleccionado();
    const nombre = this.nombreEdicion().trim();
    const descripcion = this.descripcionEdicion().trim();
    const precio = this.precioEdicion();
    const categoriaId = this.categoriaEdicion();

    if (
      !producto ||
      !nombre ||
      !descripcion ||
      precio === null ||
      precio <= 0 ||
      categoriaId === null
    ) {
      this.error.set(
        'Completa nombre, descripción, precio y categoría.'
      );
      return;
    }

    this.cargando.set(true);
    this.error.set(null);

    this.productosApiServicio
      .actualizar(producto.id, {
        nombre,
        descripcion,
        precio,
        categoria_id: categoriaId
      })
      .subscribe({
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