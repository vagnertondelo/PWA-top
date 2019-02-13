import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  exports:[
    ProdutoComponent,
    ProdutoListaComponent
  ]
})
export class ProdutosModule { }
