velocity-example
================

A leaderboard example with velocity configured with jasmine-unit, mocha web, &amp; jasmine.


### Installation

```sh
# clone the velocity-example repo and run meteorite...
$ git clone https://github.com/xolvio/velocity-example.git
$ cd velocity-example
$ mrt

# if you have troubles, try updating your installations
# there are some reports of having to run these updates a few times to get everything updated
$ npm update
$ meteor update
$ mrt update
$ mrt

```


### Included Test Frameworks

The `velocity` package coordinates between test frameworks and provides a common structure for reporting test results.  Velocity by itself does not perform any tests.  This example app includes the following velocity-compatible test frameworks:

* [jasmine](https://github.com/Sanjo/meteor-jasmine) - run jasmine tests in the Meteor context - great for integration testing.



### Tutorials

[Writing Acceptance Tests (with Nightwatch)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.acceptance.test.md)
[Writing Unit Tests (with Jasmine and Velocity)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md)
[Writing Unit Tests (with Tinytest)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md)
