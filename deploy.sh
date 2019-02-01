#!/bin/bash

# exit if any command fails
set -e

LATEST_TAG=$(git describe --tags --abbrev=0)
CURRENT_REVISION=$(git describe)
NUMBER_FILES_CHANGED=$(git diff --name-only HEAD $LATEST_TAG | wc -l)
FILES_CHANGED=$(git diff --name-only HEAD $LATEST_TAG)

if [ -z "$FILES_CHANGED" ]; then
  echo Nothing changed since $LATEST_TAG
fi

if grep -qE '\bcms/' <<< "$FILES_CHANGED"; then
    echo Building CMS
    cd cms
    yarn build
    cd ..
    git add cms/dist
fi

if grep -qE '\bpwa/' <<< "$FILES_CHANGED"; then
    echo Building PWA
    cd pwa
    yarn build
    cd ..
    git add pwa/dist
fi

cat version | perl -ne 'chomp; print join(".", splice(@{[split/\./,$_]}, 0, -1), map {++$_} pop @{[split/\./,$_]}), "\n";' > version.tmp
mv version.tmp version

VERSION=v$(cat version)-dev

git add version
VERSION=v$(cat version)-dev

git commit -m "Build $VERSION"
git tag -a $VERSION -m "$VERSION"
git push --tags
git push --all

git lg -10

echo done.