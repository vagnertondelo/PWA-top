import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute) { }

  produtos: Produto[] = [];


  ngOnInit() {
    console.log("achou lista de produtos");
    this.produtoService.listProdutos().subscribe(produtos => {
      // console.log("imagem = " +photos.imagem64);
      // console.log("ID = "+photos.valorDefnido.id);
      //console.log("lista de produtos = " + JSON.stringify(produtos[0].imagem));
      //console.log("Valor definifo = " +  photos[0].valorDefnido.id);
      //console.log("ID = "+photos.valorDefnido);
      //console.log("lista push  " +this.produtos.push(produtos[1]));
      this.produtos = produtos;
    });

    // const categoria = this.route.snapshot.params.categoria;
    // this.produtoService.produtoCategoria(categoria).subscribe
    //   (produto => {
    //     this.produtos = produto.content[0];
    //   });
    // console.log("produto categoria achou ");

    
  }

}
