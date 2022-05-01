import {Pessoa} from './ex_08';



class Aluno implements Pessoa {
    nome: string;
    idade: number;
    rua: string;
    
    matricula: number;
    cadeiras: string;
       cadastrar( ):void{
        console.log(this.nome )
        console.log(this.idade )
        console.log(this.rua  )
        console.log(this.matricula  )
        console.log(this.cadeiras  )
       }

    }

class Funcionario implements Pessoa {
    nome: string;
    idade: number;
    rua: string;

    identificador: number;
    setor: string;
    cadastrar( ):void{
        console.log(this.nome )
        console.log(this.idade )
        console.log(this.rua  )
        console.log(this.identificador  )
        console.log(this.setor  )
       }
   }


let AlunoA = new Aluno();
AlunoA.nome = "Eliane Henriqueta";
AlunoA.idade = 43;
AlunoA.rua = "Jose Zeferino"
AlunoA.matricula = 134;
AlunoA.cadeiras = "Portugues, Fisica, Matematica, Ingles";

let FuncionarioA = new Funcionario();
FuncionarioA.nome = "Eliane Henriqueta";
FuncionarioA.idade = 43;
FuncionarioA.rua = "Jose Zeferino";
FuncionarioA.identificador = 1245;
FuncionarioA.setor = "Contabil";


AlunoA.cadastrar();
FuncionarioA.cadastrar();