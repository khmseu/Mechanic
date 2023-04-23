#! /bin/bash -xe

rm -rf dout built
npm run build # ttsc
git add dout built
git add -A dout built

rm -rf doc
./node_modules/.bin/typedoc
git add doc
git add -A doc

gnu-config/gitlog-to-changelog >ChangeLog
./makechangelog.sh
