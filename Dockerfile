FROM node:16-alpine

LABEL maintainer="hungnd@miichisoft.net"
WORKDIR /var/www/frontend

ENV NODE_ENV=development

RUN npm install -g npm@latest

COPY . .
EXPOSE 3000

CMD [ "sh", "-c", "npm install --quiet && npm start" ]
