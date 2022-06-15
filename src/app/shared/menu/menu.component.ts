import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label:'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items:[
          {
            label: 'Textos y fechas',
            icon: PrimeIcons.ARROW_LEFT,
            routerLink: 'basicos'
          },
          {
            label: 'Numeros',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE,
            routerLink: 'no-comunes'
          }
        ]
      },{
        label: 'Pipes personalizados',
        icon: PrimeIcons.COG

      }
    ];
  }
}
