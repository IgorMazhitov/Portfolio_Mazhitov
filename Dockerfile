FROM node

WORKDIR /portfolio

COPY package.json /portfolio

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]