import { Component } from '@angular/core';
import { PrincipalComponent } from '../../secciones/principal/principal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrincipalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
