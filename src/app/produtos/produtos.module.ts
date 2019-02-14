import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoDetalhesModule } from './produto-detalhes/produto-detalhes.module';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from './produto-lista/produtos/produtos.component';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoListaModule } from './produto-lista/produto-lista.module';

@NgModule({
 
  imports: [
    ProdutoModule,
    ProdutoDetalhesModule,
    ProdutoListaModule


  ]
})
export class ProdutosModule { }
