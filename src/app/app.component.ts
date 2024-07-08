import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './headers/navegacion/navegacion.component';
import { AnunciosComponent } from './headers/anuncios/anuncios.component';
import { FooterComponent } from './footers/footer/footer.component';
import {DescuentosComponent} from './secciones/descuentos/descuentos.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DescuentosComponent,CommonModule, RouterOutlet, NavegacionComponent, AnunciosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
