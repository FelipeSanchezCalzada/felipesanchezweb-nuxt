FROM node:18-alpine as build

RUN apk update && apk upgrade

WORKDIR /app
COPY . /app

RUN npm install -g pnpm
RUN pnpm install && pnpm run build

FROM node:18-alpine

RUN apk update && apk upgrade && apk add dumb-init
WORKDIR /app
COPY --from=build /app/.output ./

EXPOSE 3000
# set app host and port . In nuxt 3 this is based on nitor and you can read
#more on this https://nitro.unjs.io/deploy/node#environment-variables
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

# start the app with dumb init to spawn the Node.js runtime process
# with signal support
CMD ["dumb-init","node","/app/server/index.mjs"]