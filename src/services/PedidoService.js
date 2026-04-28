class PedidoService {
    constructor() {
        if (PedidoService.instancia) {
            return PedidoService.instancia;
        }

        PedidoService.instancia = this;
    }

    mensagem() {
        console.log('Service funcionando');
    }
}

const instancia = new PedidoService();

export default instancia;