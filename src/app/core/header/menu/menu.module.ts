import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
    
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
