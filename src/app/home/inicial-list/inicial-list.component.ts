import { Component, OnInit } from '@angular/core';
import { InicialService } from '../inicial/inicial.service';
import { Inicial } from '../inicial/inicial';


@Component({
  selector: 'app-inicial-list',
  templateUrl: './inicial-list.component.html',
  styleUrls: ['./inicial-list.component.scss']
})
export class InicialListComponent implements OnInit {

  constructor(
    private inicialService: InicialService) { }
    photos: any = [];
    filter: string = '';
   

  ngOnInit(): void {
    console.log("achou lista");
    this.inicialService.listPhotos().subscribe(photos => {

      // console.log("imagem = " +photos.imagem64);
      // console.log("ID = "+photos.valorDefnido.id);

      console.log("imagem = " +   JSON.stringify(photos));
      //console.log("Valor definifo = " +  photos[0].valorDefnido.id);
      //console.log("ID = "+photos.valorDefnido);
      

      this.photos = photos;
    });

  }
}