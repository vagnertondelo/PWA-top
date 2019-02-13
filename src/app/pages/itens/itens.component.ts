import { Component, OnInit } from '@angular/core';
import { InicialService } from 'src/app/home/inicial/inicial.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  constructor(
    private inicialService: InicialService) { }
    photos: any = [];
    filter: string = '';
   

  ngOnInit(): void {
    console.log("achou lista");
    this.inicialService.listPhotos().subscribe(photos => {


      console.log("imagem = " +  photos[0].imagem);
      console.log("Valor definifo = " +  photos[0].valorDefnido.id);
      this.photos = photos;
    });

  }

}
