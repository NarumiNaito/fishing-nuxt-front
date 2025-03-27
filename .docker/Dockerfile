FROM node:22.9.0-alpine3.19

WORKDIR /usr/app

ENV CHOKIDAR_USEPOLLING=true
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

RUN apk update \
    && apk add --no-cache bash