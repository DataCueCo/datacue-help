#!/usr/bin/env sh

# abort on errors
set -e
git pull origin master
# build
yarn run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'help.datacue.co' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:DataCueCo/datacue-help.git master:gh-pages

cd -
