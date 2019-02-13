import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {


  @Input() nome='';

  @Input() url= 'http://www.superirmao.com.br/imagem/97c706ba48303ce95df988ced972bb59.jpg';

  constructor() { }

  ngOnInit() {
    console.log("achou produto");
  }

}
