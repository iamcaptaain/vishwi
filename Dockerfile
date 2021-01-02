FROM mongo:latest

MAINTAINER Captain<always>

RUN apt-get -y update

RUN apt-get install -y nodejs

RUN apt-get install -y curl

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get -y update

RUN apt-get install -y yarn

RUN apt-get install -y npm

RUN apt-get install -y nano

RUN apt-get install -y tree

RUN npm install npm@latest -g

WORKDIR /vishwajeet/src


RUN export PORT=80
