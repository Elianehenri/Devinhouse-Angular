var Animal = /** @class */ (function () {
    function Animal(nome, raca, corPelagem, peso) {
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso;
    }
    return Animal;
}());
var exibeAnimal = new Animal("Cachorro", "Shih-tzu", "Preto sólido", 4);
console.log(exibeAnimal.nome);
console.log(exibeAnimal.raca);
console.log(exibeAnimal.corPelagem);
console.log(exibeAnimal.peso);
