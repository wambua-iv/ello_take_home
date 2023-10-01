FROM node:18-alpine

WORKDIR /usr
COPY package.json package-lock.json ./
RUN npm ci --production

COPY . .

RUN npm run build

CMD [ "npm", "run","preview" ]