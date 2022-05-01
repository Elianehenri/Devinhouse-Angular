"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    Aluno.prototype.cadastrar = function () {
        console.log(this.nome);
        console.log(this.idade);
        console.log(this.rua);
        console.log(this.matricula);
        console.log(this.cadeiras);
    };
    return Aluno;
}());
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Funcionario.prototype.cadastrar = function () {
        console.log(this.nome);
        console.log(this.idade);
        console.log(this.rua);
        console.log(this.identificador);
        console.log(this.setor);
    };
    return Funcionario;
}());
var AlunoA = new Aluno();
AlunoA.nome = "Eliane Henriqueta";
AlunoA.idade = 43;
AlunoA.rua = "Jose Zeferino";
AlunoA.matricula = 134;
AlunoA.cadeiras = "Portugues, Fisica, Matematica, Ingles";
var FuncionarioA = new Funcionario();
FuncionarioA.nome = "Eliane Henriqueta";
FuncionarioA.idade = 43;
FuncionarioA.rua = "Jose Zeferino";
FuncionarioA.identificador = 1245;
FuncionarioA.setor = "Contabil";
AlunoA.cadastrar();
FuncionarioA.cadastrar();
