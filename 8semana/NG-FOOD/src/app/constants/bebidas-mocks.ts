import { IBebida } from '../models/bebida.model';

export const LISTA_BEBIDAS_MOCK: IBebida[] = [
  {
    id:1,
    titulo: 'Refrigerante',
    enderecoImagem:
      './assets/refrigerante.jpg',
    descricao: 'coca-cola, fanta, guarana',
    valor: 12.00


  },
  {
    id:2,
    titulo: 'Sucos',
    enderecoImagem:
      './assets/suco.jpg',
    descricao: 'Laranja,limao, uva, acerola, abacaxi',
    valor: 17.00
  
  },
  {
    id:3,
    titulo: 'Vinhos',
    enderecoImagem:
      './assets/vinhos.jpg',
      descricao: 'vinho tinto suave, vinho branco',
    valor: 85.00
  }
];