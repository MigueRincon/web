import { Component, signal } from '@angular/core';
import { Saludo } from './components/saludo/saludo';
import { Usuario } from './components/usuario/usuario';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'mi-primera-app';
}
