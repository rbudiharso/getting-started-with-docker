FROM node:alpine

WORKDIR /opt/app
COPY package*.json ./

ARG node_env=production
ENV NODE_ENV=node_env
RUN npm install

COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]