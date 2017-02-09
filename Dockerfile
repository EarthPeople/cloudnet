FROM node:7.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN npm install -g yarn && yarn install
COPY . /usr/src/app

EXPOSE 8080

CMD [ "yarn", "start" ]
