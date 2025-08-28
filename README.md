# Full Cycle Rocks! 💪

Este projeto faz parte do desafio proposto pelo **Programa Full Cycle**, onde criamos uma aplicação completa utilizando **Node.js**, **MySQL**, **Nginx como proxy reverso** e **Docker Compose**.

Quando um usuário acessa `http://localhost:8080`, o Nginx encaminha a requisição para uma aplicação Node.js, que insere um nome aleatório na tabela `people` do banco de dados MySQL e retorna uma página HTML com a mensagem:

## ✅ Requisitos

### Docker e Docker Compose



## 🚀 Como Executar

### Clone o repositório github.com/oliveiracmorais/fullcycle-rocks

```bash
git clone https://github.com/oliveiracmorais/fullcycle-rocks.git
cd fullcycle-rocks
docker-compose up -d --build
```

## 🧪 Como Testar

### Quando todos os serviços estiverem ativos digite no navegador:

localhost:8080 
