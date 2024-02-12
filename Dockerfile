FROM node:21.6.1-bookworm-slim
WORKDIR /var/www/html
COPY . .
RUN npm i -g live-server
RUN yarn
EXPOSE 8080
CMD yarn dev