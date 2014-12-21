velocity-examples
================

Examples of using testing frameworks that are integrated with Velocity.

### Installation

```sh
# clone the velocity-examples repo and run meteor
$ git clone https://github.com/meteor-velocity/velocity-examples.git
$ cd velocity-examples
```


#### For Jasmine:
```sh
$ cd leaderboard-jasmine
$ meteor
```

#### For Cucumber:
```sh
$ cd leaderboard-cucumber
$ meteor
```

#### For Nightwatch:
```sh
$ cd leaderboard-nightwatch
$ meteor
```

=======
### Included Test Frameworks

The `velocity` package coordinates between test frameworks and provides a common structure for reporting test results.  Velocity by itself does not perform any tests.  This example app includes the following velocity-compatible test frameworks:

* [mocha-web-velocity](https://github.com/mad-eye/meteor-mocha-web) - A Velocity version of mocha-web.  Runs mocha tests in the Meteor context which is great for integration testing.
* [jasmine-unit](https://github.com/xolvio/jasmine-unit) - Runs jasmine unit tests out of the Meteor context.  Fast and good for smaller unit tests.
* [jasmine](https://github.com/Sanjo/meteor-jasmine) - run jasmine tests in the Meteor context - great for integration testing.
* [clinical-nightwatch](https://github.com/awatson1978/clinical-nightwatch.js) - run Selenium automated browser tests with the Nightwatch bridge.  Good for end-to-end tests and acceptance tests.



### Tutorials

[Writing Acceptance Tests (with Nightwatch)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.acceptance.test.md)  
[Writing Unit Tests (with Jasmine and Velocity)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md)  
[Writing Unit Tests (with Tinytest)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md)  


https://hackpad.com/Nightwatch-Discussion-HP8M8n3iDM4  
