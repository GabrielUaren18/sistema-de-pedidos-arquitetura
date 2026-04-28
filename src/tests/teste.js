import { Pedido } from '../models/Pedido.js';

import { DescontoStrategy } from '../strategies/DescontoStrategy.js';


// ======================
// TESTE TOTAL
// ======================

const pedido = new Pedido();

if (pedido.total() === 0) {
    console.log('Teste do total funcionando');
}


// ======================
// TESTE DESCONTO
// ======================

const desconto = new DescontoStrategy();

if (desconto.calcular(100) === 90) {
    console.log('Teste de desconto funcionando');
}