FROM node:lts
WORKDIR /var/www/html
COPY package.json .
RUN yarn
COPY . .
RUN npm i -g live-server
EXPOSE 8080
CMD yarn dev