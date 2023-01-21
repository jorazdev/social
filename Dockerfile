FROM node:16.14.2-alpine as base

WORKDIR /srv

COPY package*.json ./


FROM base as dev

RUN npm install

COPY . .

CMD [ "npm", "run", "start:dev" ]


FROM base as prod

RUN npm install --production

COPY . .

RUN npm i -g @nestjs/cli

RUN npm run build 

CMD [ "npm", "run", "start:prod" ]
