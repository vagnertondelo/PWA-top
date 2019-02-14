import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDetalhesComponent } from './produto-detalhes.component';
import { ProdutoModule } from '../produto/produto.module';

@NgModule({
  declarations: [ProdutoDetalhesComponent],
 
  imports: [
    CommonModule,
    ProdutoModule
  ],
  exports:[
    ProdutoDetalhesComponent
  ]
})
export class ProdutoDetalhesModule { }
