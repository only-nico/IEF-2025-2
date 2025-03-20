FROM node:20

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3009

CMD ["npm", "run", "dev"]