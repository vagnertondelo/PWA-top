import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {


  @Input() nome='';

  @Input() url='';

  @Input() pesoBruto ='';

  
  constructor() { }

  ngOnInit() {
  }

}
