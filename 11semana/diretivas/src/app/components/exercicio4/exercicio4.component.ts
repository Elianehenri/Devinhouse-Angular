import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  arrayFotos: any = [
 	 {
	    url: "https://img.freepik.com/fotos-gratis/desenvolvedor-de-software-focado-escrevendo-codigo-no-laptop-olhando-para-varias-telas-com-linguagem-de-programacao-e-interrompido-pelo-codificador-do-colega-pedindo-conselhos-programadores-fazendo-computacao-em-nuvem-online_482257-33386.jpg?t=st=1652491719~exp=1652492319~hmac=500cc88dab9e84127b677e99838b234507db32c06bb0c7c236876fde7cd4c246&w=1380",
	    description:"Desenvolvedor de software focado escrevendo código no laptop olhando para várias telas com linguagem de programação é interrompido pelo codificador do colega pedindo conselhos."
	  },
	  {
	    url: "https://img.freepik.com/fotos-gratis/programador-em-desenvolvimento-desenvolvimento-design-de-sites-e-tecnologias-de-codificacao-trabalhando-no-escritorio-da-empresa-de-software_18497-1234.jpg?w=1060",
	    description:"Programador em desenvolvimento desenvolvimento design de sites e tecnologias de codificação trabalhando no escritório da empresa de software Foto Premium."
	  },
	  {
	    url: "https://img.freepik.com/vetores-gratis/programacao-de-aplicacao-e-conceito-de-desenvolvimento-de-software-laptop-com-codigo-de-programa_39422-612.jpg?t=st=1652492524~exp=1652493124~hmac=7b7c4e942709b1c2ecee3febc8bc59a78085f9b084510c0b4834ad3c8d4fb4e8&w=996",
	    description:"Programação de aplicação e conceito de desenvolvimento de software, laptop com código de programa Vetor grátis."
	  },
	  {
	    url: "https://img.freepik.com/vetores-gratis/codigo-do-programa-na-tela-do-laptop-trabalho-de-escritorio-desenvolvimento-de-software-e-estatistica-de-dados_39422-766.jpg?t=st=1652461931~exp=1652462531~hmac=614c86cf64617f83d0baa390e93af4c4a0f077e836115eeb44ebaf5f14c80b4d&w=996",
	    description:"Código do programa na tela do laptop, trabalho de escritório, desenvolvimento de software e estatística de dados Vetor grátis"
	  },
	  {
	    url: "https://img.freepik.com/vetores-gratis/desenvolvedores-de-software-trabalhando-na-codificacao-de-scripts-engenheiro-de-programacao-de-caracteres-em-php-python-javascript-e-outras-linguagens_90220-243.jpg?t=st=1652492508~exp=1652493108~hmac=d32aa6c28200721a3c7b33f2a8555bf392d5d6fc2232372874db19e44f54608a&w=900",
	    description:"Desenvolvedores de software trabalhando na codificação de scripts. engenheiro de programação de caracteres em php, python, javascript e outras linguagens Vetor grátis"
	  }
	]


  constructor() { }

  ngOnInit(): void {
  }

}
