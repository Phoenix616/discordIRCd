FROM node:17

COPY ./ /opt/discordircd
WORKDIR /opt/discordircd

RUN npm install

CMD ["node", "server.js"]