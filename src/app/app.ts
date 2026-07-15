import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tema3');

  nombre = "KEVIN"

  boton = "ENVIAR INFORMACIÓN"

  imagen = "tecmina.png"
  ancho = 200
  alto = 200

  color = "blue"


  saludar(){
    alert("HOLA " + this.nombre)
  }

  cambiarTextoBoton(){
    if (this.boton == "ENVIAR INFORMACIÓN")
      this.boton = "CANCELAR"
    else 
      this.boton = "ENVIAR INFORMACIÓN"
  }

  aumentar(){
    this.ancho += 10
    this.alto += 10
  }

  reducir(){
    this.alto -= 10
    this.ancho -= 10
  }
}
