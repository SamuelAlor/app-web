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
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Categoria } from '../../modelos/categoria';
import { Producto } from '../../modelos/producto';
import { CategoriasServicio } from '../../servicios/categorias';
import { ProductosApiServicio } from '../../servicios/productos-api';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextModule,
    MessageModule,
    ProgressSpinnerModule
  ],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class Categorias {
  private readonly categoriasServicio = inject(CategoriasServicio);
  private readonly productosServicio = inject(ProductosApiServicio);

  readonly categorias = signal<Categoria[]>([]);
  readonly productos = signal<Producto[]>([]);
  readonly categoriaSeleccionada = signal<Categoria | null>(null);

  readonly cargando = signal(false);
  readonly error = signal<string | null>(null);

  readonly nombreNuevo = signal('');
  readonly descripcionNueva = signal('');

  readonly dialogoEdicion = signal(false);
  readonly dialogoEliminacion = signal(false);

  readonly categoriaEnEdicion = signal<Categoria | null>(null);
  readonly nombreEdicion = signal('');
  readonly descripcionEdicion = signal('');

  constructor() {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.cargando.set(true);
    this.error.set(null);

    this.categoriasServicio.listar().subscribe({
      next: (categorias) => {
        this.categorias.set(categorias);
        this.cargando.set(false);
      },
      error: (error: Error) => {
        this.error.set(error.message);
        this.cargando.set(false);
      }
    });
  }

  crearCategoria(): void {
    const nombre = this.nombreNuevo().trim();
    const descripcion = this.descripcionNueva().trim();

    if (!nombre) {
      this.error.set('Escribe el nombre de la categoría.');
      return;
    }

    this.cargando.set(true);
    this.error.set(null);

    this.categoriasServicio
      .crear({
        nombre,
        descripcion
      })
      .subscribe({
        next: () => {
          this.nombreNuevo.set('');
          this.descripcionNueva.set('');
          this.cargarCategorias();
        },
        error: (error: Error) => {
          this.error.set(error.message);
          this.cargando.set(false);
        }
      });
  }

  seleccionarCategoria(categoria: Categoria): void {
    this.categoriaSeleccionada.set(categoria);
    this.cargando.set(true);
    this.error.set(null);

    this.productosServicio.listarPorCategoria(categoria.id).subscribe({
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

  abrirEdicion(categoria: Categoria): void {
    this.categoriaEnEdicion.set(categoria);
    this.nombreEdicion.set(categoria.nombre);
    this.descripcionEdicion.set(categoria.descripcion ?? '');
    this.dialogoEdicion.set(true);
  }

  guardarEdicion(): void {
    const categoria = this.categoriaEnEdicion();
    const nombre = this.nombreEdicion().trim();
    const descripcion = this.descripcionEdicion().trim();

    if (!categoria || !nombre) {
      this.error.set('Escribe un nombre válido para la categoría.');
      return;
    }

    this.cargando.set(true);
    this.error.set(null);

    this.categoriasServicio
      .actualizar(categoria.id, {
        nombre,
        descripcion
      })
      .subscribe({
        next: () => {
          this.dialogoEdicion.set(false);
          this.categoriaEnEdicion.set(null);
          this.cargarCategorias();
        },
        error: (error: Error) => {
          this.error.set(error.message);
          this.cargando.set(false);
        }
      });
  }

  abrirEliminacion(categoria: Categoria): void {
    this.categoriaEnEdicion.set(categoria);
    this.dialogoEliminacion.set(true);
  }

  confirmarEliminacion(): void {
    const categoria = this.categoriaEnEdicion();

    if (!categoria) {
      return;
    }

    this.cargando.set(true);
    this.error.set(null);

    this.categoriasServicio.eliminar(categoria.id).subscribe({
      next: () => {
        this.dialogoEliminacion.set(false);
        this.categoriaEnEdicion.set(null);

        if (this.categoriaSeleccionada()?.id === categoria.id) {
          this.categoriaSeleccionada.set(null);
          this.productos.set([]);
        }

        this.cargarCategorias();
      },
      error: (error: Error) => {
        this.error.set(error.message);
        this.cargando.set(false);
      }
    });
  }

  cerrarDialogos(): void {
    this.categoriaEnEdicion.set(null);
  }
}