#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -add
git commit -m 'New deployment'
git push -f git@github.com:gdiazb/expresodelsol-dev.git main:gh-pages

cd -
