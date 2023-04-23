#!/bin/bash -x

rm -rf dout built
npm run build # ttsc

./src/GnuConfigConverter/save/pt2pw.pl

./src/GnuConfigConverter/save/pt2at.pl
