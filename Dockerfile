FROM node:16-alpine

LABEL maintainer="Team HRM"

WORKDIR /app
COPY . /app

RUN npm install -g npm@latest

EXPOSE 9999

CMD [ "sh", "-c", "npm install --quiet && npm start" ]
