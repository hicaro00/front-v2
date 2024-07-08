import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from '../helpers/global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  urlTipo_cambio = global.get_Tipo_Cambio;

  constructor( private _httl:  HttpClient) { 
    }



  getCurrency(): Observable<any>{
    return this._httl.get(this.urlTipo_cambio);
  }
}
