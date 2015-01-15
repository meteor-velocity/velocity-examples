leaderboard-robotframework
==========================

This is an example application demonstrating the use of the [meteor-robotframework](https://github.com/rjsmith/meteor-robotframework) Meteor testing framework for end-to-end Meteor application testing.

### Installation

Please refer to the [installation pre-requisites](https://github.com/rjsmith/meteor-robotframework#installation) for meteor-robotframework.  You must have a working installation of Robot Framework (python - based) on your machine, and appropriate webdriver executables.  By default, leaderboard-robotframework will try and use the 'PhantomJS' webdriver (see the `${BROWSER}` variable assignment in the [leaderboard-resources.txt](tests/robotframework/suites/leaderboard-resources.txt) file)

Then:

```sh
$ git clone https://github.com/rjsmith/velocity-examples.git
$ cd velocity-examples/leaderboard-robotframework
$ meteor
```

### Viewing test progress and results

Summary test results will be reported in the Velocity HTML Reporter, at http://localhost:3000

As this is a demonstration application, it is highly recommended that you switch on additional debug log output, so you can see Robot Framework's own console output:

```sh
$ RF_DEBUG=1 meteor
```

Open the local file `tests/robotframework/.logs/report.html` file in a new browser session to view the generated Robot Framework test report.  Unfortunately, this is not built using Meteor, so you will have to use the good-old F5 key to refresh on every run.

You could also uncomment the `--debugfile  debug.txt` line in the [arguments.txt](tests/robotframework/arguments.txt) file and monitor it in realtime to see more detailed Robot Framework - generated debug logging in another console window:

```sh
$ cd tests/robotframework/.logs
$ tail -f debug.txt
```

### Interesting things to look at

1. Using client-side [javascript code](leaderboard-fixture.js#L43) invoked from [user keywords](tests/robotframework/suites/leaderboard-resources.txt#L38) using Selenium2Library's [Execute Javascript](http://rtomac.github.io/robotframework-selenium2library/doc/Selenium2Library.html#Execute%20Javascript) and [Execute Async Javascript](http://rtomac.github.io/robotframework-selenium2library/doc/Selenium2Library.html#Execute%20Async%20Javascript) keywords

2. Examples of [scripting - style](tests/robotframework/suites/leaderboard.txt#L11) and [BDD - style](tests/robotframework/suites/leaderboard.txt#L14) test cases.

3. Using [xpath and css element location selectors](tests/robotframework/suites/leaderboard-resources.txt) (thanks to meteor-cucumber for providing the xpath expressions!)

4. [De-composing and layering resource files](tests/robotframework/suites/selenium-resources.txt) to promote re-use and keeping the tests [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

5. Using [other Robot Framework libraries](tests/robotframework/suites/leaderboard-resources.txt#L43) to provide additional test functionality.
