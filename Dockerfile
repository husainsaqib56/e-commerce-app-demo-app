FROM node:14-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install -g @angular/cli@10.2.4

RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
