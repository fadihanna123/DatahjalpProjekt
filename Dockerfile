FROM node:latest
WORKDIR /var/www/html
COPY . .
RUN npm i -g pnpm live-server
RUN pnpm i
EXPOSE 1000
CMD pnpm start