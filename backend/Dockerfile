FROM node:18-alpine

# set node_modules dir & set permition to non root user 
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# setup working directory
WORKDIR /home/node/app

# add content to the working directory
COPY ./* ./

# unsure all the application files owned by none root user
USER node 

# same permision in the working directory  
COPY --chown=node:node . .

RUN npm install

EXPOSE 5000

CMD ["node", "index.js"]