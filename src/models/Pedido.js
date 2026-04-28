export class Pedido {
    constructor() {
        this.itens = [];
        this.observers = [];
    }

    adicionar(item) {
        this.itens.push(item);
        this.notificar();
    }

    remover(index) {
        this.itens.splice(index, 1);
        this.notificar();
    }

    total() {
        let soma = 0;

        for (let item of this.itens) {
            soma += item.subtotal();
        }

        return soma;
    }

    registrar(observer) {
        this.observers.push(observer);
    }

    notificar() {
        for (let obs of this.observers) {
            obs.atualizar(this);
        }
    }
}