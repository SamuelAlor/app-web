import { Injectable, signal } from '@angular/core';
import { ImagenGaleria } from '../modelos/imagen-galeria';

@Injectable({ providedIn: 'root' })
export class GaleriaServicio {
  private readonly imagenesInternas = signal<ImagenGaleria[]>([
    {
      id: 1,
      titulo: 'Primavera',
      descripcion: 'El árbol florece entre flores y cielos despejados.',
      ruta: 'assets/galeria/primavera.jpg'
    },
    {
      id: 2,
      titulo: 'Verano',
      descripcion: 'Los frutos maduran bajo el sol de verano.',
      ruta: 'assets/galeria/verano.jpg'
    },
    {
      id: 3,
      titulo: 'Otoño',
      descripcion: 'Las hojas se tiñen de tonos cálidos junto a las calabazas.',
      ruta: 'assets/galeria/otono.jpg'
    },
    {
      id: 4,
      titulo: 'Invierno',
      descripcion: 'La nieve cubre el paisaje y el árbol se ilumina.',
      ruta: 'assets/galeria/invierno.jpg'
    }
  ]);

  readonly imagenes = this.imagenesInternas.asReadonly();

  obtenerTodas() {
    return this.imagenes;
  }
}
