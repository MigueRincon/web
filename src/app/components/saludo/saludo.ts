import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',  // el tag HTML para usar este componente
  standalone: true,  // no necesita un modulo (ANGULAR 17+)
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class Saludo {
  nombre: string = 'Mundo';   // una propiedad (dato)
}
