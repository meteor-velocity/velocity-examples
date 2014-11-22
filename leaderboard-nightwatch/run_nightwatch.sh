echo "changing file permissions"
chmod +x .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/launch_nightwatch*.sh
chmod +x .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/selenium/selenium-server-standalone-2.42.0.jar

echo "installing nightwatch in .meteor/local/build"
  cd .meteor/local/build
  npm install nightwatch@0.5.3
  cd ../../..

echo "running nightwatch"
  .meteor/local/build/node_modules/nightwatch/bin/nightwatch -c .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/nightwatch_from_app_root.json $1 $2
