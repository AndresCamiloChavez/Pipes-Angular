import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  mapMayusculas = {
    'true': 'Pasar a minusculas',
    'false': 'Pasar a mayúsculas',
  }
  enMayusculas: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
