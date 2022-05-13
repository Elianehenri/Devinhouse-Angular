import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercicio1Component } from './components/exercicio1/exercicio1.component';
import { Exercicio2Component } from './components/exercicio2/exercicio2.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercicio1Component,
    Exercicio2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
