#!/bin/bash

if [ ! -d website/node_modules ]; then
  docker exec -it sad-generator bash /sad-generator/preparation.sh
fi
docker exec -it sad-generator bash /sad-generator/generator.sh