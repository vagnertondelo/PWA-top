import { NgModule } from '@angular/core';
import { ProdutoDetalhesModule } from './produto-detalhes/produto-detalhes.module';
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
