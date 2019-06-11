#!/bin/bash

cd /sad-generator/kg
yarrrml-parser -i mapping.yml -o mapping.rml.ttl
java -jar rmlmapper.jar -m mapping.rml.ttl -o data.nt
cd /sad-generator/website/
npx eleventy --serve