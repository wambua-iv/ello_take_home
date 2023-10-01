FROM node:18-alpine

WORKDIR /client
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . .
CMD ["npm", "run", "start"]