#! /bin/bash

rm -rf dout built
yarn run build

rm -rf doc
./node_modules/.bin/typedoc
