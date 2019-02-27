import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produtos/produto/produto.service';
import { Produto } from 'src/app/produtos/produto/produto';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from './menu/menu.service';
import { Menu } from './menu/menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private route:ActivatedRoute,
    private menuService: MenuService
  ) { }

  produtos: Menu[] = [];


  ngOnInit() {
    console.log("achou menu");
    // this.produtoService.listProdutos().subscribe(produtos => {
    //   this.produtos = produtos;
     
    // });
    this.menuService.menuProdutos().subscribe(produtos =>{
      this.produtos = produtos;
    });
  }

}