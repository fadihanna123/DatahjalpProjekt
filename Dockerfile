FROM node:20.14.0-alpine3.20
WORKDIR /var/www/html
COPY package.json .
ENV NODE_ENV production
RUN npm i -g live-server
RUN yarn --production
COPY . .
EXPOSE 8080
CMD yarn dev