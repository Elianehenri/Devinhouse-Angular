import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { BebidaListaComponent } from './pages/bebida-lista/bebida-lista.component';
import { ComidaListaComponent } from './pages/comida-lista/comida-lista.component';
import { HomeComponent } from './home/home/home.component';
import { Route,  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PedidoListaComponent } from './pages/pedido-lista/pedido-lista.component';
import { ItemCardapioComponent } from './components/item-cardapio/item-cardapio.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'bebidas',
    component: BebidaListaComponent
  },
  {
    path: 'comidas',
    component: ComidaListaComponent
  },
  {
    path: 'pedido',
    component: PedidoListaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    BebidaListaComponent,
    ComidaListaComponent,
    HomeComponent,
    PedidoListaComponent,
    ItemCardapioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
