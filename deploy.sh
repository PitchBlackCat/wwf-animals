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
    yarn version --new-version $DATE --no-git-tag-version
    git add index.js
    git commit --no-edit --amend

    git tag -a $DATE -m "$DATE"
    git push --tags
    git push --all

    npm publish
else
    git commit --amend -m "Updated project files"
fi

git lg -10

echo done.