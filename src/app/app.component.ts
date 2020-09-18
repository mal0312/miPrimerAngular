import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Aguante Racing';
  visible:boolean = false;
//cualquier valor a la variable
  cars : any []=[
    'toyota','nissan','ford',"tesla"
  ]

  autos : any[]=[
    {id:1,nombre:'ford',total:0,colores:['azul','verde','gris']},
    {id:2,nombre:'toyota',total:2,colores:['negro','rojo','blanco']}
  ]
}
