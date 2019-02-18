import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDetalhesComponent } from './produto-detalhes.component';
import { ProdutoModule } from '../produto/produto.module';
import { ProdutoDescricaoComponent } from './produto-descricao/produto-descricao.component';

@NgModule({
  declarations: [ProdutoDetalhesComponent, ProdutoDescricaoComponent],
 
  imports: [
    CommonModule,
    ProdutoModule,
  ],
  exports:[
    ProdutoDetalhesComponent,
    ProdutoDescricaoComponent
  ]
})
export class ProdutoDetalhesModule { }
