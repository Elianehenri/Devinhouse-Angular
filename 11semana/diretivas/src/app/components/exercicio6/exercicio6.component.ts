import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  click:boolean = false

  usuario:string = "";
  cpf:number = 0;
  diaAniversario:number = 0;
  senha:string = "";


  constructor() { }

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.usuario && this.cpf && this.diaAniversario && this.senha){
      this.click = true;
    }
  }
}
