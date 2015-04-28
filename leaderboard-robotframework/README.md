leaderboard-robotframework
==========================

This is an example application demonstrating the use of the [meteor-robotframework](https://github.com/rjsmith/meteor-robotframework) Meteor testing framework for end-to-end Meteor application testing.

### Installation

Please refer to the [installation pre-requisites](https://github.com/rjsmith/meteor-robotframework#installation) for meteor-robotframework.  You must have a working installation of Robot Framework (python - based) on your machine, and the Selenium2Library RF library.  Note that meteor-robotframework automatically downloads PhantomJS and ChromeDriver executables.

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

Open the http://localhost:3000/robotframework/report.html link in a new browser session to view the generated Robot Framework test report.  Unfortunately, this is not refreshed reactively using Meteor, so you will have to use the good-old F5 key to refresh on every run.

You could also uncomment the `--debugfile  debug.txt` line in the [arguments.txt](tests/robotframework/arguments.txt) file and monitor it in realtime to see more detailed Robot Framework - generated debug logging in another console window:

```sh
$ cd tests/robotframework/.logs
$ tail -f debug.txt
```

### Interesting things to look at

1. Using client-side [javascript code](leaderboard-fixture.js#L43) invoked from [user keywords](tests/robotframework/suites/leaderboard-resources.txt#L38) using Selenium2Library's [Execute Javascript](http://rtomac.github.io/robotframework-selenium2library/doc/Selenium2Library.html#Execute%20Javascript) and [Execute Async Javascript](http://rtomac.github.io/robotframework-selenium2library/doc/Selenium2Library.html#Execute%20Async%20Javascript) keywords

2. Examples of [scripting - style](tests/robotframework/suites/leaderboard.txt#L15) and [BDD - style](tests/robotframework/suites/leaderboard.txt#L18) test cases.

3. Using [xpath and css element location selectors](tests/robotframework/suites/leaderboard-resources.txt#L14) (thanks to meteor-cucumber for providing the xpath expressions!)

4. [De-composing and layering resource files](tests/robotframework/suites/selenium-resources.txt) to promote re-use and keeping the tests [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

5. Using [other Robot Framework libraries](tests/robotframework/suites/leaderboard-resources.txt#L44) to provide additional test functionality.  Take a look at the [list of libraries included in the Robot Framework distribution here](http://robotframework.org/robotframework/#standard-libraries), all of which could potentially be used in a meteor-robotframework test.  Plus, any of the many other third-party libraries out there (your search engine is your friend)

6. Use of end-to-end test - specific Meteor fixture code in the tests/robotframework/fixtures folder.

### Acknowledgements

The example BDD - style test and associated fixture code were copied from the leaderboard-cucumber example.
