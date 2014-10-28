#! /bin/bash
set -e

cd leaderboard-jasmine
curl https://install.meteor.com | /bin/sh
../node_modules/velocity-ci/velocity-ci.js
