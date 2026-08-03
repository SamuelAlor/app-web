import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { KnobModule } from 'primeng/knob';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ImagenGaleria } from '../../modelos/imagen-galeria';
import { GaleriaServicio } from '../../servicios/galeria';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    CardModule,
    KnobModule,
    SelectButtonModule,
    SliderModule,
    ToggleSwitchModule
  ],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  private readonly galeriaServicio = inject(GaleriaServicio);
  private readonly franjaMiniaturas = viewChild<ElementRef<HTMLElement>>('franjaMiniaturas');

  readonly imagenes = this.galeriaServicio.obtenerTodas();
  readonly indiceActivo = signal(0);
  readonly reproduccionAutomatica = signal(false);
  readonly mostrarMiniaturas = signal(true);
  readonly intervalo = signal(4);
  readonly tamanoMarco = signal('comoda');
  readonly escalaImagen = signal(100);
  readonly opcionesTamano = [
    { label: 'Compacta', value: 'compacta' },
    { label: 'Cómoda', value: 'comoda' },
    { label: 'Amplia', value: 'amplia' }
  ];
  readonly imagenActiva = computed((): ImagenGaleria => {
    const imagenes = this.imagenes();

    return (
      imagenes[this.indiceActivo()] ??
      imagenes[0] ?? {
        id: 0,
        titulo: 'Imagen no disponible',
        descripcion: 'No hay imágenes para mostrar.',
        ruta: ''
      }
    );
  });

  constructor() {
    effect((onCleanup) => {
      if (!this.reproduccionAutomatica()) {
        return;
      }

      const temporizador = window.setInterval(() => this.siguiente(), this.intervalo() * 1000);

      onCleanup(() => window.clearInterval(temporizador));
    });
  }

  anterior(): void {
    const total = this.imagenes().length;

    if (total) {
      this.indiceActivo.update((indice) => (indice - 1 + total) % total);
    }
  }

  siguiente(): void {
    const total = this.imagenes().length;

    if (total) {
      this.indiceActivo.update((indice) => (indice + 1) % total);
    }
  }

  seleccionarImagen(indice: number): void {
    this.indiceActivo.set(indice);
  }

  desplazarMiniaturas(direccion: number): void {
    this.franjaMiniaturas()?.nativeElement.scrollBy({
      left: direccion * 180,
      behavior: 'smooth'
    });
  }

  manejarErrorImagen(evento: Event): void {
    (evento.target as HTMLImageElement).classList.add('imagen-no-disponible');
  }
}
