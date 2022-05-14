import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercicio1Component } from './components/exercicio1/exercicio1.component';
import { Exercicio2Component } from './components/exercicio2/exercicio2.component';
import { Exercicio3Component } from './components/exercicio3/exercicio3.component';
import { Exercicio4Component } from './components/exercicio4/exercicio4.component';
import { Exercicio5Component } from './components/exercicio5/exercicio5.component';
import { Exercicio6Component } from './components/exercicio6/exercicio6.component';
import { Exercicio7Component } from './components/exercicio7/exercicio7.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio6Component,
    Exercicio7Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
