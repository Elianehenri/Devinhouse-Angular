import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  templateUrl: './exercicio9.component.html',
  styleUrls: ['./exercicio9.component.css']
})


export class Exercicio9Component implements OnInit {


  cadastro:boolean = false

  animal:any = {
    nomeDono: "",
    cpf: '',
    email: "",
    nomeCachorro: "",
    codCachorro: 0,
  }
 

  
  constructor() { }

  ngOnInit(): void {
  }
  cadastrar(){
    this.cadastro = true;
  }
}
