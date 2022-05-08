import { IComida } from '../models/comida.model';

export const LISTA_COMIDAS_MOCK: IComida[] = [
  {
    id:1,
    titulo: 'Hamburger',

    enderecoImagem:
      './assets/hamburger.jpg',
    descricao:'Pão de brioche,blend bovino , queijo cheddar, cebola roxa, alface americana e tomate.',
    valor:25.00
  },
  {
    id:2,
    titulo: 'Sanduiche',
    enderecoImagem:
      './assets/sandwich.jpg',
    descricao:'Pão de brioche ,180gr de blend bovino, 1 fatia de queijo cheddar.',
    valor:22.00
  },
  {
    id:3,
    titulo: 'MINIBLAST',
    enderecoImagem:
      './assets/MINIBLAST.png',
    descricao:'Pão de brioche,blend bovino , queijo cheddar, cebola roxa, alface americana e tomate.',
    valor: 18.00
  },
];