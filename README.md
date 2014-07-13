velocity-example
================

A leaderboard example with velocity configured with jasmine-unit, mocha web, jasmine, &amp; nightwatch-selenium


### Installation

```sh
# clone the velocity-example repo and run meteorite...
$ git clone https://github.com/xolvio/velocity-example.git
$ mrt
```


## Included Test Frameworks

The `velocity` package coordinates between test frameworks and provides a common structure for reporting test results.  Velocity by itself does not perform any tests.  This example app includes the following velocity-compatible test frameworks:

* [mocha-web-velocity](https://github.com/mad-eye/meteor-mocha-web) - A Velocity version of mocha-web.  Runs mocha tests in the Meteor context which is great for integration testing.
* [jasmine-unit](https://github.com/xolvio/jasmine-unit) - Runs jasmine unit tests out of the Meteor context.  Fast and good for smaller unit tests.
* [jasmine](https://github.com/Sanjo/meteor-jasmine) - run jasmine tests in the Meteor context - great for integration testing.
* [selenium-nightwatch](https://github.com/awatson1978/selenium-nightwatch/) - run acceptance tests in real browsers using Selenium and Nightwatch.



### Tutorials  

[Writing Acceptance Tests (with Nightwatch)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.acceptance.test.md)  
[Writing Unit Tests (with Jasmine and Velocity)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md)  
[Writing Unit Tests (with Tinytest)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md)  
