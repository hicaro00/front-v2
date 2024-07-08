import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { idioma } from '../../models/interfaces/moneda';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [],
  templateUrl: './anuncios.component.html',
  styleUrl: './anuncios.component.css'
})
export class AnunciosComponent implements OnInit {

  idiomas:idioma[]= [
    {pais:"peru",idioma: "español" },
    {pais:"usa",idioma: "ingles"}
  ];
  
  dataCurrencies: any;
  currencies: any;

  constructor(private _currencyService: CurrencyService) { 
    this.currencies =[ { 
      abreviado: 'PEN',
      valor: 1
    }];

    
  }
  
  ngOnInit(): void {
    this.getCurrency();
  }

  
    
    
  
    
  

  async getCurrency() {
    this._currencyService.getCurrency().subscribe(
      {
        next: (data) => {
          this.dataCurrencies = data;  // obtengo la data de sunat

          const items = this.dataCurrencies.body.items[this.dataCurrencies.body.items.length - 1];  // elij el ultimo item del array que envia sunat 
          
            const compra = items.compra;
            const abreviacion= items.moneda;
            const fecha = items.fechaSunat;

              // imprimo en consola los datos obtenidos

            this.currencies.push({   // agrego los datos obtenidos al array currencies
              abreviado: abreviacion,
              valor: compra
            });
          

        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  
  
  



}
