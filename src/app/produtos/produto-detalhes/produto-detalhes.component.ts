import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.scss']
})
export class ProdutoDetalhesComponent implements OnInit {


  produto:Produto;

  constructor(
   private route:ActivatedRoute,
   private produtoService: ProdutoService
  ) { }

  ngOnInit():void {
    
    const id = this.route.snapshot.params.id;

    this.produtoService.findById(id).subscribe(produto => {
      
      
      console.log("Nome do produto unico " +JSON.stringify( produto.Nome));
      
      this.produto = produto
    });

    console.log("ID do produto : "+id);
  
  }

}
