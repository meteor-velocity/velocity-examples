velocity-example
================

A leaderboard example with velocity configured with jasmine-unit, mocha web, jasmine, nightwatch, &amp; selenium.


### Installation

```sh
# clone the velocity-example repo and run meteorite...
$ git clone https://github.com/meteor-velocity/velocity-example.git
$ cd velocity-example
$ meteor

```


### Run Nightwatch Tests

```sh
# optional:  you may want to reset your application data
terminal-a$ meteor reset

# run your application as usual
terminal-a$ meteor

# then open up a second terminal and run_nightwatch to run all tests
terminal-b$ sudo ./run_nightwatch.sh

# or specify a specific test
terminal-b$ sudo ./run_nightwatch.sh -t tests/nightwatch/LeaderboardWalkthrough.js
```


### Included Test Frameworks

The `velocity` package coordinates between test frameworks and provides a common structure for reporting test results.  Velocity by itself does not perform any tests.  This example app includes the following velocity-compatible test frameworks:

* [mike:mocha](https://github.com/mad-eye/meteor-mocha-web) - A Velocity version of mocha-web.  Runs mocha tests in the Meteor context which is great for integration testing.
* [xolvio:jasmine-unit](https://github.com/xolvio/jasmine-unit) - Runs jasmine unit tests out of the Meteor context.  Fast and good for smaller unit tests.
* [sanjo:jasmine](https://github.com/Sanjo/meteor-jasmine) - run jasmine tests in the Meteor context - great for integration testing.
* [clinical:nightwatch](https://github.com/awatson1978/clinical-nightwatch) - Ultra-easy acceptance testing with Selenium browser automation, Saucelabs, and Browserstack.



### Tutorials

[Writing Acceptance Tests (with Nightwatch)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.acceptance.test.md)
[Writing Unit Tests (with Jasmine and Velocity)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md)
[Writing Unit Tests (with Tinytest)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md)
