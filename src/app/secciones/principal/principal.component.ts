import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  trending: any[];

  activeIndex = 0;

  constructor() {

    this.trending = [
      {nombre: "marycleare", categoria:"runing shoes" },
      {nombre:"LacedJOrgers", categoria:"for men "},
      {nombre:"LacedJOrgers", categoria: "barlet texture" },
      {nombre:"omax adidas", categoria: "sport shoes" },
      
    ];
   }



   setActiveIndex(index:number){
    this.activeIndex = index ;
   }
}
