FROM node:10.9.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

FROM nginx:latest

WORKDIR /app

COPY ./dist/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
