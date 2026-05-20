\# Sistema de Pedidos \- Casa della Pizza (ORIGINAL DA ITÁLIA)

Projeto desenvolvido para a disciplina de Arquitetura de Sistemas do IFCE Campus Boa Viagem. PROFESSOR: Renato William

O sistema simula uma pizzaria online, permitindo adicionar produtos ao carrinho, remover itens e enviar pedidos pelo WhatsApp.

\---

\#\# Funcionalidades

\- Adicionar produtos ao carrinho  
\- Remover produtos do carrinho  
\- Atualização automática da interface  
\- Envio de pedidos via WhatsApp  
\- Cálculo automático do subtotal  
\- Backend fake com JSON Server

\---

\#\# Estrutura do Projeto

\`\`\`text  
src/  
├── controllers  
├── factories  
├── models  
├── observers  
├── repositories  
├── services  
├── strategies  
├── tests  
├── views  
└── main.js  
\`\`\`

Além das camadas principais, foram criadas pastas específicas para padrões de projeto e testes.

\---

\#\# Padrões de Projeto

\- Factory  
\- Singleton  
\- Observer  
\- Strategy  
\- Repository

\---

\#\# Tecnologias

\- HTML  
\- CSS  
\- JavaScript  
\- JSON Server

\---

\#\# Como Executar

Instalar o JSON Server:

\`\`\`bash  
npm install \-g json-server  
\`\`\`

Executar o backend fake:

\`\`\`bash  
json-server \--watch db.json  
\`\`\`

Depois abrir o arquivo \`index.html\` no navegador.

\---

\#\# Testes

Foram realizados testes simples para:

\- cálculo do total  
\- aplicação de desconto

\---

Gabriel Uaren    
ADS \- IFCE Campus Boa Viagem    
2026

