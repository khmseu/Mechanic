#! /bin/bash -xe

rm -rf TMP
mkdir TMP
(
    cd TMP

    git clone --branch=v3.5.0 https://github.com/mvdan/sh.git

    cd sh/_js

    ./build

    go mod tidy -v

    go get -d -v golang.org/x/tools/go/packages

    GO111MODULE=on go run api_dump.go >api_dump.json
)
rm -rf src/GnuConfigConverter/gen-api/mvdan-sh
mkdir -vp src/GnuConfigConverter/gen-api/mvdan-sh
cp -avi TMP/sh/_js/. src/GnuConfigConverter/gen-api/mvdan-sh/.
