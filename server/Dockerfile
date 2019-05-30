FROM keymetrics/pm2:latest-alpine
# FROM node:11-alpine
WORKDIR /src
COPY . /src
RUN npm config set registry https://registry.npm.taobao.org && \
  npm i
EXPOSE 3000
ENTRYPOINT ["pm2-runtime","start","pm2.config.json"]
# ENTRYPOINT ["npm","run","serve"]
