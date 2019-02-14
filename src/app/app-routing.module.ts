import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ItensComponent } from './pages/itens/itens.component';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ListComponent } from './pages/list/list.component';
import { InicialListComponent } from './home/inicial-list/inicial-list.component';
import { ListaItensComponent } from './pages/lista-itens/lista-itens.component';
import { ProdutoDetalhesComponent } from './produtos/produto-detalhes/produto-detalhes.component';

const routes: Routes = [

  {
    path: 'produto',
    component: ProdutoListaComponent

  },
  {
    path: 'detalhes/:id',
    component: ProdutoDetalhesComponent

  },
  {
    path: 'list',
    component: ListComponent

  },
  {
    path: 'bebidas',
    component: ListaItensComponent

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
