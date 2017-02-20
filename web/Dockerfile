FROM node:7.5.0-alpine

COPY ./package.json /packages/package.json
RUN cd /packages/ && npm install

WORKDIR /personal_website

RUN cp -a /packages/* /personal_website/
COPY . /personal_website

EXPOSE 3000

CMD ["node_modules/.bin/http-server", "public", "-p 3000"]
