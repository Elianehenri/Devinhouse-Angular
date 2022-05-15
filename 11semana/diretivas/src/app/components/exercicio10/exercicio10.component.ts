import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.css']
})
export class Exercicio10Component implements OnInit {


  // list: any = [
  //   "Levar o lixo pra fora",
  //   "Lavar os pratos",
  //   "Comprar a feira",
  //   "Comprar o pão"
  // ];
  newTarefa:boolean = false;
  edicao:boolean = false;

  list:any = [
    {
     tarefa:"Levar o lixo pra fora",
    },
    {
      tarefa:"Levar filho na creche",
    },
    {
      tarefa:"Fazer exercicios DEVinHouse",
    },
    {
      tarefa:"Ler livro",
    },
  ]


  tarefa: string = '';


  index:number = 0


  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    this.list.push({tarefa:this.tarefa});
    this.newTarefa = false;
  }

  remover(index:number){
    this.list.splice(index, 1);
  }

  btnNewTarefa(){
    this.newTarefa = true;
  }

  editar(index:number){
    this.edicao = true;
    this.tarefa = this.list[index].tarefa
    this.index = index
  }

  salvarEdit(){
    this.list[this.index].tarefa = this.tarefa
    this.edicao = false;
  }

}


