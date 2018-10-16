#!/usr/bin/env sh

# abort on errors
set -e

# navigate to docs directory
cd docs

# launch dev server
vuepress dev

cd -
