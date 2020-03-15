FROM node:10

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200 35730

CMD [ "npm", "start" ] 