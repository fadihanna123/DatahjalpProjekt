FROM node:20.14.0-alpine3.20
WORKDIR /var/www/html
COPY package.json .
RUN yarn
COPY . .
RUN npm i -g live-server
EXPOSE 8080
CMD yarn dev