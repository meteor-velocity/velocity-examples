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
git clone https://github.com/meteor/meteor.git
cd meteor/examples/leaderboard

mrt add velocity
mrt add mocha-web-velocity
mrt add coffeescript
mrt add jasmine-unit
mrt add moment
mrt add velocity-html-reporter
mrt add selenium-nightwatch
````

Tutorials  
------------------------

[Writing Acceptance Tests (with Nightwatch)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.acceptance.test.md)  
[Writing Unit Tests (with Jasmine and Velocity)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md)  
[Writing Unit Tests (with Tinytest)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md)  
