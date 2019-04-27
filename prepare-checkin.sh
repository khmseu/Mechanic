#! /bin/bash

rm -rf dout built
yarn run build
git add -A dout built

rm -rf doc
./node_modules/.bin/typedoc
git add -A doc
