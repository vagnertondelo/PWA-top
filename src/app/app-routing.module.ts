import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { InicialComponent } from './home/inicial/inicial.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ItensComponent } from './pages/itens/itens.component';
import { ListComponent } from './pages/list/list.component';
import { InicialListComponent } from './home/inicial-list/inicial-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent

  },
  {
    path: 'itens',
    component: ItensComponent

  },
  {
    path: 'login',
    component: SigninComponent

  },
  {
    path: '',
    component: InicialListComponent

  },
  {
    path: '**',
    component: NotFoundComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
