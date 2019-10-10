FROM node:lts

MAINTAINER Norman Lab

EXPOSE 80
EXPOSE 3000

ADD . $APPDIR
RUN npm install

CMD ["node", "src/index.js"]
