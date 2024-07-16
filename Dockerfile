FROM node:20.15.0-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /var/www/html
COPY yarn.lock package.json ./
ENV NODE_ENV production
RUN npm i --silent -g live-server
RUN yarn --silent --production
COPY . .
USER fadi
EXPOSE 8080
CMD yarn dev