FROM node:10.10.0

COPY . /TrojansFC

WORKDIR /TrojansFC

RUN npm install

EXPOSE 80