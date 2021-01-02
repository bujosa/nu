FROM node:12-alpine AS base

WORKDIR /usr/src/app

COPY package.json .

RUN npm i 

CMD ["npm","run","start:dev"]

COPY . . 