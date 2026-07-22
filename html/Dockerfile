FROM node:22

WORKDIR /app

COPY website1/package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY website1/ .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]