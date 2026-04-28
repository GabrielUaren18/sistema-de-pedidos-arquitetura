\# Justificativa Técnica

\#\# 1\. Quais problemas foram resolvidos?

O sistema original apresentava código desorganizado, ausência de separação de responsabilidades, dependência direta do DOM e dificuldade de manutenção. Após a refatoração, o sistema passou a possuir arquitetura em camadas, melhor organização dos arquivos e maior desacoplamento entre interface e lógica.

\---

\#\# 2\. Como a arquitetura melhorou o sistema?

A arquitetura em camadas permitiu separar responsabilidades entre models, services, controllers, repositories e views. Isso tornou o sistema mais organizado, reutilizável, escalável e mais fácil de manter e evoluir futuramente.

\---

\#\# 3\. Onde os padrões foram aplicados?

\- Factory: utilizado para criação de produtos.  
\- Singleton: aplicado no serviço principal do sistema.  
\- Observer: utilizado para atualização automática do carrinho e interface.  
\- Strategy: utilizado para aplicação de descontos.  
\- Repository: utilizado para simular persistência de pedidos.

\---

\#\# 4\. Quais benefícios foram obtidos?

Os principais benefícios foram melhor organização do código, desacoplamento entre componentes, facilidade de manutenção, reutilização de código, escalabilidade e preparação do sistema para futuras melhorias e integrações.  
