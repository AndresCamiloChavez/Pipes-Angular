import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'AndrEs camilo chaVez ';
  valor: number= 1000;
  objeto ={
    nombre: 'Andres'
  }


  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor  );
  }
}
