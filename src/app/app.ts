import { Component, signal } from '@angular/core';
import { Saludo } from './components/saludo/saludo';
import { Usuario } from './components/usuario/usuario';
import { Mi } from './components/mi/mi';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo, Usuario, Mi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'mi-primera-app';
}
