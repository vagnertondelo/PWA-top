import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
;

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
    
    this.produtoService.findById(id).subscribe
    (produto => {
      this.produto = produto.content[0];
    });
    console.log("ID do produto : "+id);
  
  }

}
