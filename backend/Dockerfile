# Dockerfile para NestJS
FROM node:21

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli*.json ./
COPY .eslintrc*.js ./
COPY .prettierrc ./
COPY .env ./
COPY src ./src

RUN npm run build

EXPOSE 4000
CMD ["npm", "run", "start:prod"]
