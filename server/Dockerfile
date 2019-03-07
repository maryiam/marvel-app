# build stage
FROM node:10-alpine
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /app/marvel-server
WORKDIR /app/marvel-server

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

CMD if [ ${APP_ENV} = production ]; then yarn start ; else yarn watch ; fi
