import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {


  //! i18nSelect
  nombre: string = 'Andres';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //! i18nPlural

  clientes: string[] = ['María', 'Pedro', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other':`tenemos #  clientes esperando`
  }
  constructor(private primengConfig: PrimeNGConfig) { }



  ngOnInit(): void {
    this.primengConfig.ripple = true; 
  }
  cambiarCliente(){
    this.nombre = "Camila";
    this.genero = 'femenino'
  }
  borrarCliente(){
    this.clientes.pop();
  }
  
  //keyValue Pipe

  persona = {
    nombre: 'Andres',
    edad: 35,
    direccion: 'Bogotá'
  }

  //Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },{
      nombre: 'Robin',
      vuela: false
    },{
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //! Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);
  })
}
