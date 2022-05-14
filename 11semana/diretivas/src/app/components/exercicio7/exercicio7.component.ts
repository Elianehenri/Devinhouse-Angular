import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css']
})
export class Exercicio7Component implements OnInit {

  click: boolean = false

  usuario: string = "";
  cpf: number = 0;
  diaAniversario: number = 0;
  senha: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  cadastrar() {
    this.click = true;
  }
}
