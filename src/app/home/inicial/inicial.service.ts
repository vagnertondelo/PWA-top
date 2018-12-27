import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inicial } from './inicial';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class InicialService {

  constructor(private http: HttpClient) { }

   listPhotos(){
    return this.http.get<Inicial[]>(API);  
  }
}
