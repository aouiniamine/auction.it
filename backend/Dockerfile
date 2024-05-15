FROM node:18-alpine

# create node_modules dir & set permition as a non root user 
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# setup working directory
WORKDIR /home/node/app

# unsure all the application files owned by non root user
USER node 

# copy files and ensure thier owned by non root user
COPY --chown=node:node . .

RUN npm install

EXPOSE 5000

CMD ["node", "index.js"]