import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

import { ProdutoModule } from 'src/app/produtos/produto/produto.module';
import { MenuModule } from './menu/menu.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
   

  ],
  exports:[
    HeaderComponent, MenuModule
  ]
})
export class HeaderModule { }
