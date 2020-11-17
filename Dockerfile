FROM node:10-stretch

WORKDIR /home/vgmdb-friendly-relay2mp3tag/

# Copy project
COPY ./ ./

# Update npm
RUN npm install -g npm@latest

# Install npm modules.
RUN npm install

# Execute command
CMD npm start
