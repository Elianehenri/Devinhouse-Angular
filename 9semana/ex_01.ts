
//- exampleLet - sendo uma variável não constante e de escopo local do tipo numérico com a sua idade como valor.

let exampleLet: number = 65;
console.log (exampleLet )


//2- exampleConst - sendo uma variável constante e de escopo local do tipo string com o seu nome como valor.

const exampletConst:{
     nome:string
    } = {     
    nome:'Eliane',  
}


function exibir(exampletConst:any): string{
    return exampletConst.nome;
}

console.log(exibir(exampletConst));

//exampleVar - sendo uma variável não constante e de escopo global do tipo string com a concatenação da seguinte frase: “Olá meu nome é ”+exampleConst +” e tenho ”+exampleLet+” anos.”;

var dados:{
    name: string,
    idade: number,
   
}


dados = {
name: "Eliane",
idade: 43
    
 }


infomex(dados);

function infomex(dados:{ name: string, idade:number}) {
console.log(
"Olá meu nome é : "+ dados.name,
"e  tenho: "+dados.idade + " "+ "anos",

    );
 }


