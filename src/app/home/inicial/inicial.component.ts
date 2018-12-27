import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {

  @Input() description='';

  @Input() url= '';
  
  constructor() { }

  ngOnInit(): void {
    
    console.log("achou inicial");
  
  }

}
