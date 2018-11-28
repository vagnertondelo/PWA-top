import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { InicialComponent } from './inicial/inicial.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent

  },
  {
    path: '',
    component: InicialComponent

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
