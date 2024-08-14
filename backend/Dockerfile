FROM node:lts

RUN apt-get -y update && apt-get -y upgrade && npm install -g yarn --force

WORKDIR /usr/local/app

COPY package.json .
COPY yarn.lock .

RUN yarn install && yarn cache clean --force

COPY . .

ENV PORT 80

EXPOSE $PORT

CMD ["yarn", "dev"]