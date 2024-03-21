FROM node:14-alpine 


RUN apk update

RUN apk add --no-cache --force nodejs npm

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .



RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


