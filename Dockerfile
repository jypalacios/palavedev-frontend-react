FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY package*.json ./

RUN npm install

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]