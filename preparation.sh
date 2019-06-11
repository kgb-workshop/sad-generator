#!/bin/bash

cd /sad-generator/
./nodesource_setup.sh
apt-get -y install nodejs
wget https://github.com/RMLio/rmlmapper-java/releases/download/v4.3.3/rmlmapper-4.3.3-r92.jar
mv rmlmapper-4.3.3-r92.jar /sad-generator/kg/rmlmapper.jar
npm i -g npx 
npm i -g @rmlio/yarrrml-parser
cd /sad-generator/website/
npm i