import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './produto-lista.component';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoModule } from '../produto/produto.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from '../produto-detalhes/produto-detalhes.component';
import { RouterModule } from '@angular/router';
import { ProdutoDetalhesModule } from '../produto-detalhes/produto-detalhes.module';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoModule,
    ProdutoDetalhesModule,
    RouterModule
  ],
  exports:[
    ProdutoComponent,
    ProdutoListaComponent
    
    
  ]
})
export class ProdutoListaModule { }
