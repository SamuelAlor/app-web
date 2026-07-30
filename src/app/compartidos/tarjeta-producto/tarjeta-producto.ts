import { Component, input, output } from '@angular/core';
import { Heart } from '@primeicons/angular/heart';
import { HeartFill } from '@primeicons/angular/heart-fill';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Producto } from '../../modelos/producto';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [RouterLink, Heart, HeartFill, ButtonModule, CardModule, TagModule],
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.css'
})
export class TarjetaProducto {
  readonly producto = input.required<Producto>();
  readonly agregado = input.required<boolean>();
  readonly favoritoSeleccionado = output<Producto>();

  agregarAFavoritos(): void {
    this.favoritoSeleccionado.emit(this.producto());
  }
}
