#!/bin/bash

# exit if any command fails
set -e

DATE=`date +%Y.%m.%d`
git add .
git commit -m "Update @ $DATE"

LATEST_TAG=$(git describe --tags --abbrev=0)
CURRENT_REVISION=$(git describe)
NUMBER_FILES_CHANGED=$(git diff --name-only HEAD $LATEST_TAG | wc -l)
FILES_CHANGED=$(git diff --name-only HEAD $LATEST_TAG)

if [ -z "$FILES_CHANGED" ]; then
  echo Nothing changed since $LATEST_TAG
  echo done.
  exit
fi

if grep -qE '\bindex.js' <<< "$FILES_CHANGED"; then
    npm version "$DATE"
    git add index.js
    git commit -n --amend

    git tag -a $DATE -m "$DATE"
fi

exit

git commit -m "Build $VERSION"

git push --tags
git push --all

git lg -10

echo done.