import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../produto/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  @Input() produtos:Produto[] = [];

  constructor() { }

  ngOnInit() {
  }

}
