#! /bin/bash
set -e

curl https://install.meteor.com | /bin/sh

cd leaderboard-jasmine
../node_modules/velocity-ci/velocity-ci.js

cd ../leaderboard-cucumber
../node_modules/velocity-ci/velocity-ci.js
