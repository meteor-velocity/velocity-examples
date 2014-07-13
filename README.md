velocity-example
================

A leaderboard example with velocity configured with jasmine-unit, mocha web, jasmine, &amp; nightwatch-selenium


### Installation

```sh
# clone the velocity-example repo and run meteorite...
$ git clone https://github.com/xolvio/velocity-example.git
$ mrt
```


### Building From Scratch  

```sh
$ meteor create --example leaderboard
$ cd leaderboard

# install velocity reporter
$ mrt add velocity-html-reporter

# install reporting frameworks
$ mrt add jasmine-unit
$ mrt add mocha-web-velocity
$ mrt add jasmine
$ mrt add selenium-nightwatch

# install tinytests (optional)
$ mrt add leaderboard-tinytests
```

Now copy the tests from the [velocity-example repo](https://github.com/xolvio/velocity-example/tree/master/tests) to your `tests` directory.
The easiest way to do this is to clone the velocity-example repo and copy them over like this:

```sh
$ mkdir -p ~/tmp
$ cd ~/tmp
$ git clone https://github.com/xolvio/velocity-example.git
$ cd -
# assuming you are back in your leaderboard directory...
$ mkdir -p tests
$ cp -r ~/tmp/velocity-example/tests/* tests
```


### Tutorials  

[Writing Acceptance Tests (with Nightwatch)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.acceptance.test.md)  
[Writing Unit Tests (with Jasmine and Velocity)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md)  
[Writing Unit Tests (with Tinytest)](https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md)  
