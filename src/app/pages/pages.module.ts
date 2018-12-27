import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItensComponent } from './itens/itens.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ItensComponent, ListComponent],
  imports: [RouterModule,
    CommonModule
  ]
})
export class PagesModule { }
