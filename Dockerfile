# FROM node:slim as deps

# WORKDIR /app

# COPY package.json /app/
# COPY tsconfig.json /app/tsconfig.json
# RUN yarn

# FROM node:slim as builder
# WORKDIR /app
# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN yarn run build


# FROM node:slim as runner
# WORKDIR /app

# ENV NODE_ENV production

# WORKDIR /webview
# RUN printf "node /webview/nextweb/server.js & npx static-server /webview/web/ -p 3001" > /webview/run.sh
# COPY --from=builder /app/.next/standalone /webview/nextweb
# COPY --from=builder /app/.next/static /webview/web/_next/static

# RUN rm -rf app
# RUN chmod -R 777 /webview
# WORKDIR /webview

# EXPOSE 3000
# EXPOSE 3001



# CMD [ "sh","/webview/run.sh" ]



#copy mode

FROM node:12-alpine as runner
WORKDIR /app

ENV NODE_ENV production

WORKDIR /webview
#RUN printf "node /webview/nextweb/server.js & npx static-server /webview/web/ -p 3001" > /webview/run.sh
RUN printf "node /webview/nextweb/server.js" > /webview/run.sh
COPY .next/standalone /webview/nextweb 

RUN rm -rf /app
RUN chmod -R 777 /webview
WORKDIR /webview

EXPOSE 3000 

CMD [ "sh","/webview/run.sh" ]