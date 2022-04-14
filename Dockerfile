FROM node:14.17.0-alpine

LABEL maintainer="cedric.badjah@gmail.com"

# Créer un dossier dans le container
WORKDIR /var/www/fake-api-container

# Absolument besoin de ça pour bcrypt
RUN apk update \
  && apk add make g++ python

# Install app dependencies - For NPM use: `COPY package.json package-lock.lock ./`
COPY package.json yarn.lock ./
# For NPM use: `RUN npm ci`
RUN yarn --pure-lockfile

# Copy important files - Add ormconfig.ts here if using Typeorm
COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ./

# Copie le contenu du fichier .env.docker dans le dossier du container sur le fichier .env
COPY .env.docker /var/www/fake-api-container/.env

# Entrypoint command - Replace `"yarn"` with `"npm", "run"` if you are using NPM as your package manager.
# You can update this to run other NodeJS apps
CMD [ "yarn", "start:dev", "--preserveWatchOutput" ]
