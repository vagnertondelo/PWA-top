import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu';

const API = 'http://localhost:3000/bebidas';

const APILer = 'http://localhost:3000/ler';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  menuProdutos() {
    return this.http.get<Menu[]>(API);
    //return this.http.post<Produto[]>(API,Array<Produto>());  
  }

  MenufindById(id: string){
    return this.http.get<Menu>(APILer+'/'+id);
  }
}
