FROM node:19-alpine3.15
# Required for starting application up.
RUN mkdir -p /opt/app
ENV PROJECT_HOME  /opt/app
COPY  package*.json  $PROJECT_HOME/ 
WORKDIR $PROJECT_HOME
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD  ["npx", "serve", "build" "index.html"]
