velocity-examples
================

Examples of using testing frameworks that are integrated with Velocity.

### Installation

```sh
# clone the velocity-examples repo and run meteor
$ git clone https://github.com/meteor-velocity/velocity-examples.git
$ cd velocity-examples
```

Each folder is a separate Meteor app that showcases on of the Velocity
testing frameworks.

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

#### For Robot Framework:

Install [external pre-requisites](https://github.com/rjsmith/meteor-robotframework#installation) first.  Then:

```sh
$ cd leaderboard-robotframework
$ meteor
```

=======
### Included Test Frameworks

The `velocity` package coordinates between test frameworks and provides a common structure for reporting test results.  Velocity by itself does not perform any tests.  This example app includes the following velocity-compatible test frameworks:

* [mike:mocha](https://github.com/mad-eye/meteor-mocha-web) - A Velocity version of mocha-web.  Runs mocha tests in the Meteor context which is great for integration testing.
* [sanjo:jasmine](https://github.com/Sanjo/meteor-jasmine) - Easily write and run Jasmine tests for all your Meteor code.
* [clinical-nightwatch](https://github.com/awatson1978/clinical-nightwatch.js) - run Selenium automated browser tests with the Nightwatch bridge.  Good for end-to-end tests and acceptance tests.
* [meteor-robotframework](https://github.com/rjsmith/meteor-robotframework) - run Robot Framework end-to-end tests.


### Tutorials

[Writing Acceptance Tests (with Nightwatch)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.acceptance.test.md)  
[Writing Unit Tests (with Jasmine and Velocity)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md)  
[Writing Unit Tests (with Tinytest)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md)  


https://hackpad.com/Nightwatch-Discussion-HP8M8n3iDM4  

[Introduction to meteor-robotframework](http://youtu.be/90dX3QD7dYo) (Youtube)
