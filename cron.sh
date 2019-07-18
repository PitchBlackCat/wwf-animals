#!/bin/bash

# exit if any command fails
set -e

git reset --hard >/dev/null
git pull >/dev/null
python update.py >/dev/null
./deploy.sh | grep "nothing to commit, working tree clean" >/dev/null
exit $?
