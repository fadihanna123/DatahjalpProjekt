FROM node:22.13.1-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /var/www/html
COPY yarn.lock package.json ./
ENV NODE_ENV=production
RUN npm i --silent --ignore-scripts -g live-server
RUN yarn --silent --ignore-scripts --production
COPY . .
USER fadi
EXPOSE 8080
CMD ["yarn", "dev"]