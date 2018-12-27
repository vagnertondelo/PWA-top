import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './inicial/inicial.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InicialListComponent } from './inicial-list/inicial-list.component';

@NgModule({
  declarations: [
    InicialComponent,
    InicialListComponent],

    imports: [RouterModule,
    CommonModule,
    HttpClientModule
  ]

  
})
export class HomeModule { }
