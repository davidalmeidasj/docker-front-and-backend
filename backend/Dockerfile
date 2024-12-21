FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar apenas arquivos necessários para instalar dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código do projeto para o contêiner
COPY . .

# Expor a porta usada pelo backend
EXPOSE 3000

# Usar nodemon em desenvolvimento
CMD ["sh", "-c", "npm run migrate && npm run dev"]

