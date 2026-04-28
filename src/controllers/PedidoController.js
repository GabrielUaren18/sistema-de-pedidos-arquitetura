export class PedidoController {
    constructor(pedido, view) {
        this.pedido = pedido;
        this.view = view;
    }

    mostrarTotal() {
        const total = this.pedido.total();

        this.view.mostrarTotal(total);
    }
}