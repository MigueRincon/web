import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  nombre: string ='flex wheeler';   // una propiedad (dato)
  edad: number = 25;
  activo: boolean = true;
  urlFoto: string = 'https://i.pinimg.com/736x/f2/dc/b7/f2dcb777ca90ef53b742e3fc2ac7b921.jpg';
}
