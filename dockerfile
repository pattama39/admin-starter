FROM node:16.13-alpine3.12 AS builder
WORKDIR /myweb

COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN ng build --prod

FROM nginx:1.21.4-alpine
COPY --from=builder /myweb/dist/fuse /usr/share/nginx/html