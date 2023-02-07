# path: ./Dockerfile

FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
COPY ./package.json ./yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn install
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop"]
