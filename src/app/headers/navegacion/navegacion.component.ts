import { Component ,ViewChild ,ElementRef,HostListener, OnInit} from '@angular/core';
import { rutas, rutas2, rutasProfileLogeado } from '../../helpers/rutas';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
import { rutasProfile } from '../../helpers/rutas';
import { RouterLink } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { Console } from 'node:console';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [NgStyle, NgClass,RouterLink,NgIf],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent  implements OnInit{

  
  numeroDeCompras:number = 0;
  
  userDatos:any ;
  rutasDelProfile = rutasProfile;
  showMenu:boolean = false;
  displayMenu:boolean = false;
  navegacion= rutas;
  navegacion2 = rutas2;
  
  myPerfil:String = 'My Perfil';
  datosDelUsuario:any;
  uid:any;


  constructor( ) {
    
        
  }
  ngOnInit(): void {
   
     


    
    
  }

  
  menuProfile() {
    this.showMenu = !this.showMenu;
    
  }

 
  

  

}
