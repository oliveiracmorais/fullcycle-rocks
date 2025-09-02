# Full Cycle Rocks! 💪

Este projeto faz parte do desafio proposto pelo **Programa Full Cycle**, onde criamos uma aplicação completa utilizando **Node.js**, **MySQL**, **Nginx como proxy reverso** e **Docker Compose**.

Quando um usuário acessa `http://localhost:8080`, o Nginx encaminha a requisição para uma aplicação Node.js, que insere um nome aleatório na tabela `people` do banco de dados MySQL e retorna uma página HTML com a mensagem:

## 🛠️ Tecnologias Utilizadas

-   **Node.js com Express**: Para a aplicação principal.
-   **MySQL**: Como banco de dados.
-   **Nginx**: Como proxy reverso.
-   **Docker e Docker Compose**: Para a containerização dos serviços.

## ✅ Requisitos

-   [Docker](https://docs.docker.com/get-docker/)
-   [Docker Compose](https://docs.docker.com/compose/install/)

## 🚀 Como Executar

1.  Clone o repositório:
    ```bash
    git clone https://github.com/oliveiracmorais/fullcycle-rocks.git
    ```
2.  Acesse a pasta do projeto:
    ```bash
    cd fullcycle-rocks
    ```
3.  Execute os serviços com o Docker Compose:
    ```bash
    docker-compose up -d --build
    ```

## 🧪 Como Testar

Quando todos os serviços estiverem ativos, acesse no seu navegador:

[http://localhost:8080](http://localhost:8080)