// Seletores
const botoesAdd = document.querySelectorAll(".add");
const listaCarrinho = document.getElementById("listaCarrinho");
const subtotalEl = document.getElementById("subtotal");
const qtdCarrinho = document.getElementById("qtdCarrinho");

// Estado do carrinho
let carrinho = [];

// Função para formatar preço
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

// Adicionar item
botoesAdd.forEach(botao => {
  botao.addEventListener("click", () => {
    const nome = botao.dataset.nome;
    const preco = parseFloat(botao.dataset.preco);

    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
      itemExistente.qtd++;
    } else {
      carrinho.push({
        nome,
        preco,
        qtd: 1
      });
    }

    atualizarCarrinho();
  });
});

// Atualizar carrinho
function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";

  let total = 0;
  let quantidadeTotal = 0;

  carrinho.forEach((item, index) => {
    total += item.preco * item.qtd;
    quantidadeTotal += item.qtd;

    const li = document.createElement("li");

    li.innerHTML = `
      ${item.nome} x${item.qtd} 
      - ${formatarPreco(item.preco * item.qtd)}
      <button onclick="removerItem(${index})">❌</button>
    `;

    listaCarrinho.appendChild(li);
  });

  subtotalEl.textContent = `Subtotal: ${formatarPreco(total)}`;
  qtdCarrinho.textContent = `${quantidadeTotal} 🛒 Carrinho`;
}

// Remover item
function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// BOTÃO WHATSAPP (FINALIZAR PEDIDO)
document.getElementById("btnCarrinho").addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let msg = "🍕 Pedido - Casa della Pizza\n\n";
  let total = 0;

  carrinho.forEach(item => {
    msg += item.nome + " x" + item.qtd + "\n";
    total += item.preco * item.qtd;
  });

  msg += "\nTotal: R$ " + total.toFixed(2);

  let numero = "5588999193346"; // seu número com DDD

  let link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(msg);

  window.open(link);
});