import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/app/produtos/produto/produto';


const API = 'http://localhost:2000/Listar';

@Injectable({
  providedIn: 'root'
})

export class InicialService {

  constructor(private http: HttpClient) { }

   listPhotos(){
    //return this.http.get<Inicial[]>(API);
    return this.http.post(API,Array<Produto>());  
  }
}
