#! /bin/bash
set -e

mv node_modules .node_modules
curl https://install.meteor.com | /bin/sh
.node_modules/velocity-ci/velocity-ci.js
