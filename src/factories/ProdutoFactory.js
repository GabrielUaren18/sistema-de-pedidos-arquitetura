import { Produto } from '../models/Produto.js';

export class ProdutoFactory {
    static criar(nome, preco) {
        return new Produto(nome, preco);
    }
}