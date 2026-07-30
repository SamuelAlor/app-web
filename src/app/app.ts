import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BarraNavegacion } from './compartidos/barra-navegacion/barra-navegacion';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraNavegacion],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tema3');
}
