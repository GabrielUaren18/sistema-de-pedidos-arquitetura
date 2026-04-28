export class PedidoObserver {
    atualizar(pedido) {
        console.log("📦 Pedido atualizado");
        console.log("💰 Total:", pedido.total());
    }
}