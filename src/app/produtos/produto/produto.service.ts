import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Produto} from './produto';

const API = 'http://localhost:3000/bebidas';

const APILer = 'http://localhost:3000/ler';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor(private http: HttpClient) { }

   listProdutos(){
    return this.http.get<Produto[]>(API);
    //return this.http.post<Produto[]>(API,Array<Produto>());  
  }

  findById(id: string){
    return this.http.get<Produto>(APILer+'/'+id);
  }

  listProdutosPaginate(){
    return this.http.get<Produto[]>(API);
    //return this.http.post<Produto[]>(API,Array<Produto>());  
  }
  
}