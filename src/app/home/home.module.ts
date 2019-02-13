import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './inicial/inicial.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InicialListComponent } from './inicial-list/inicial-list.component';
import { FilterByDescription } from './inicial-list/filter-by-description.pipe';

@NgModule({
  declarations: [
    InicialComponent,
    InicialListComponent,
    FilterByDescription],

  imports: [RouterModule,
    CommonModule,
    HttpClientModule
  ],

  exports: [
    InicialListComponent,
    InicialComponent
  ]
  


})
export class HomeModule { }
