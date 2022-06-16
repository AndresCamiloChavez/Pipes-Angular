import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'andres';
  nombreUpper: string = 'ANDRES';
  nombreCompleto: string = 'AnDREs cHaVEz';
} 
