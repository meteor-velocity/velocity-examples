#!/bin/sh
cd ~/WebstormProjects/meteor-testing/velocity-examples/leaderboard-cucumber/.meteor/local/build
NODE_ENV=development
ID=$1
FILES=$2
PORT=30$ID
PHANTOM_WD_PORT=44$1
ROOT_URL=http://localhost:$PORT
MASTER_URL=http://localhost:3005
MONGO_URL=mongodb://meteor@127.0.0.1:3001/db$PORT
MASTER_URL=$MASTER_URL FILES=$FILES PHANTOM_WD_PORT=$PHANTOM_WD_PORT PORT=$PORT ROOT_URL=$ROOT_URL MONGO_URL=$MONGO_URL NODE_ENV=$NODE_ENV node main.js