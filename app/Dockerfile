# Usa uma imagem base do Node.js
FROM node:18-alpine

# Instala o curl para healthcheck
RUN apk add --no-cache curl

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

COPY healthcheck.sh /healthcheck.sh
RUN chmod +x /healthcheck.sh

# Copia o código da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
