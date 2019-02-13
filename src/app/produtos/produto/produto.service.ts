import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Produto} from './produto';

const API = 'http://localhost:2000/Listar';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor(private http: HttpClient) { }

   listProdutos(){
    return this.http.get<Produto[]>(API);
    //return this.http.post<Produto[]>(API,Array<Produto>());  
  }
}