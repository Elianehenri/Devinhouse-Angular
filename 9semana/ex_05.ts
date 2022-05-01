class Animal{
    nome: string;
    raca: string;
    corPelagem: string;
    peso: number;


constructor(nome:string, raca:string, corPelagem:string, peso:number){
    this.nome = nome;
    this.raca = raca;
    this.corPelagem = corPelagem;
    this.peso = peso
}
}
let exibeAnimal = new Animal("Cachorro", "Shih-tzu", "Preto sólido", 4);


console.log(exibeAnimal.nome)
console.log(exibeAnimal.raca)
console.log(exibeAnimal.corPelagem)
console.log(exibeAnimal.peso)
