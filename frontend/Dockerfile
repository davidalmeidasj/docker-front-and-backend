# Usar uma imagem do Node.js para desenvolvimento
FROM node:18-alpine

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos necessários
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o projeto
COPY . .

# Expor a porta de desenvolvimento padrão do Vite (5173)
EXPOSE 5173

# Comando padrão para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
