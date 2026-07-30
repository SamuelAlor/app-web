import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Box } from '@primeicons/angular/box';
import { Envelope } from '@primeicons/angular/envelope';
import { Home } from '@primeicons/angular/home';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    Home,
    Box,
    Envelope,
    ButtonModule,
    ToolbarModule
  ],
  templateUrl: './barra-navegacion.html',
  styleUrl: './barra-navegacion.css'
})
export class BarraNavegacion {}
