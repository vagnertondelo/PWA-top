import { Component, OnInit } from '@angular/core';
import { InicialService } from '../inicial/inicial.service';
import { Inicial } from '../inicial/inicial';

@Component({
  selector: 'app-inicial-list',
  templateUrl: './inicial-list.component.html',
  styleUrls: ['./inicial-list.component.scss']
})
export class InicialListComponent implements OnInit {


  photos: Inicial[] = [];

  constructor(private inicialService: InicialService) { }

  ngOnInit(): void {
    console.log("achou lista");
    this.inicialService.listPhotos().subscribe(photos => {
      
      console.log(photos[0].description);
      console.log(photos[0].userId);
      
      this.photos = photos
    });

  }
}