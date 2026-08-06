import { Component } from '@angular/core';

@Component({
  selector: 'app-mi',
  standalone: true, // estamos indicando que este componente es independiente
  templateUrl: './mi.html',
  styleUrl: './mi.css',
})
export class Mi {
  logueado: boolean = false;
  rol: string = 'admin';
  frutas: string[] = ['Manzana', 'Banana', 'naranja'];

  usuarios = [
    { id: 1, nombre: 'Ana', activo: true },
    { id: 2, nombre: 'Luis', activo: false },
    { id: 3, nombre: 'Maria', activo: true },
  ];
}