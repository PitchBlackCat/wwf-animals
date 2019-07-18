#!/bin/bash

# exit if any command fails
set -e

git reset --hard
git pull
python update.py
./deploy.sh
