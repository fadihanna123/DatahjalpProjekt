FROM node:21.6.1-bullseye-slim
WORKDIR /var/www/html
COPY . .
RUN npm i -g pnpm live-server
RUN pnpm i
EXPOSE 1000
CMD pnpm start