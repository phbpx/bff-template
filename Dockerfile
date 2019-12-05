FROM node:12-alpine

COPY package.json /app/package.json
WORKDIR /app

RUN npm install

EXPOSE 3000
