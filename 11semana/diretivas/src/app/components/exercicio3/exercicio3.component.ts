import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  arrayList:string[] = [
    'Antonia Uma Sinfonia',
    'O Violino',
    'Um Castelo de Natal',
    'Um lindo dia na vizinhaça',
    'Pedro Coelho'
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
