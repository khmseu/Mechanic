#!/bin/bash -x

npm run build # ttsc

mkdir -pv gen

dts-gen --expression-file=built/GnuConfigConverter/gen-dts/index.js --file=gen/parsed --overwrite >gen/dump.txt
