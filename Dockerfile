FROM node:19
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 5666
CMD ["node","server.js","5666"]
