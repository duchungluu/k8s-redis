FROM node:alpine

#any command will be executed here
WORKDIR /usr/app

#dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./                                                                                                                                                                                                                                                                                                               

#default cmd

CMD ["npm", "start"]