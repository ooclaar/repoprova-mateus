FROM node:22

WORKDIR /app

COPY app_node/package*.json ./

RUN npm install

COPY app_node/ ./

EXPOSE 3000

CMD ["npm", "start"]