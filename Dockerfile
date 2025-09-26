FROM node:24-alpine3.21
WORKDIR /app
COPY package*.json /app
RUN npm i
COPY . /app
EXPOSE 9000
CMD ["node", "/app/index.js"]