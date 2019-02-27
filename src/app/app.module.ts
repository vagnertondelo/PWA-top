import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';

import { LoginModule } from './login/login.module';
import { ErrorsModule } from './errors/errors.module';
import { PagesModule } from './pages/pages.module';
import { HomeModule } from './home/home.module';

import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ProdutoDetalhesComponent } from './produtos/produto-detalhes/produto-detalhes.component';
import { ProdutosModule } from './produtos/produtos.module';
import { RouterModule } from '@angular/router';




//enableProdMode ();
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    ErrorsModule,
    PagesModule,
    HomeModule,
    ProdutosModule,
    RouterModule,

    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
