#! /bin/bash -x

rm -rf dout built
yarn run build
git add dout built
git add -A dout built

rm -rf doc
./node_modules/.bin/typedoc
git add doc
git add -A doc
