velocity-example
================

A leaderboard example with velocity configured with jasmine-unit, nightwatch-selenium, &amp; mocha web


Installation
------------------------

````sh
# Should be as simple as cloning the repository...
git clone https://github.com/xolvio/velocity-example.git

# And then running it...
sudo mrt
````

Building From Scratch  
------------------------

````sh
# get a copy of the leaderboard example
git clone https://github.com/meteor/meteor.git
cd meteor/examples/leaderboard

# make sure we're using the latest version of Meteor
meteor update
mrt update

# install velocity core files
mrt add velocity
mrt add coffeescript
mrt add moment
mrt add velocity-html-reporter

# install reporting frameworks
mrt add jasmine-unit
mrt add mocha-web-velocity
mrt add selenium-nightwatch

# install tinytests (optional)
mrt add leaderboard-tinytests
````



Tutorials  
------------------------

[Writing Acceptance Tests (with Nightwatch)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.acceptance.test.md)  
[Writing Unit Tests (with Jasmine and Velocity)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md)  
[Writing Unit Tests (with Tinytest)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md)  
