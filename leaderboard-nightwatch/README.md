leaderboard-nightwatch
======================

Ultra simple acceptance testing for Meteor, using [Nightwatch.js](http://nightwatchjs.org/) and [Selenium](http://www.seleniumhq.org/);

======================================
####  Version  

Meteor@1.0

======================================
####  Requirements  

  - Meteor
  - Firefox

======================================
####  Installation of Leaderboard Example

````sh
# Should be as simple as cloning the repository...  
terminal-a$ git clone https://github.com/meteor-velocity/velocity-examples.git
terminal-a$ cd velocity-examples/leaderboard-nightwatch

# run the leaderboard application
terminal-a$ meteor

# and then we want to open up a new terminal and run nightwatch
# (this is similar to running 'meteor mongo' in a separate terminal)
terminal-b$ ./run_nightwatch.sh

# or specify a specific test with the -t flag
terminal-b$ ./run_nightwatch.sh -t tests/nightwatch/walkthrough.js

# if you want to rerun the acceptance tests, go back to the first terminal
# and be sure to reset the database
terminal-a$ ctrl-c
terminal-a$ meteor reset
terminal-a$ meteor
````


======================================
####  Writing Acceptance Tests
Check out this ultra-simple syntax for writing acceptance tests, and testing your Meteor app's user interface.  All you need to do is add files to the ``/tests/nightwatch`` directory, and follow this syntax.  

For more information on syntax you can use, check out the [Nightwatch API](http://nightwatchjs.org/api#assert-attributeEquals);
````js
// tests/nightwatch/walkthrough.js

module.exports = {
      "Basic Nightwatch Walkthrough" : function (client) {
        client
          .url("http://localhost:3000")
          .waitForElementVisible('body', 1000)
          .waitForElementVisible('div#outer', 1000)
          .waitForElementVisible('div.leaderboard', 1000)
          .waitForElementVisible('.leaderboard .player', 1000)

          .verify.containsText('div.leaderboard div:nth-child(1) .name', 'Ada Lovelace')
          .verify.containsText('div.leaderboard div:nth-child(1) .score', '50')

          .verify.containsText('div.leaderboard div:nth-child(2) .name', 'Grace Hopper')
          .verify.containsText('div.leaderboard div:nth-child(2) .score', '40')

          .verify.containsText('div.leaderboard div:nth-child(3) .name', 'Claude Shannon')
          .verify.containsText('div.leaderboard div:nth-child(3) .score', '35')

          .verify.containsText('div.leaderboard div:nth-child(4) .name', 'Nikola Tesla')
          .verify.containsText('div.leaderboard div:nth-child(4) .score', '25')

          .verify.containsText('div.leaderboard div:nth-child(5) .name', 'Marie Curie')
          .verify.containsText('div.leaderboard div:nth-child(5) .score', '20')

          .verify.containsText('div.leaderboard div:nth-child(6) .name', 'Carl Friedrich Gauss')
          .verify.containsText('div.leaderboard div:nth-child(6) .score', '5')


          .verify.containsText('.none', 'Click a player to select')
          .click('div.leaderboard div:nth-child(2)')
          .pause(500)
          .waitForElementVisible('input.inc', 1000)
          .verify.attributeEquals('input.inc', 'value', 'Give 5 points')

          .click('input.inc')
          .verify.containsText('div.leaderboard div:nth-child(2) .name', 'Grace Hopper')
          .verify.containsText('div.leaderboard div:nth-child(2) .score', '45')

          .click('input.inc')
          .verify.containsText('div.leaderboard div:nth-child(2) .name', 'Grace Hopper')
          .verify.containsText('div.leaderboard div:nth-child(2) .score', '50')

          .click('input.inc')
          .verify.containsText('div.leaderboard div:nth-child(1) .name', 'Grace Hopper')
          .verify.containsText('div.leaderboard div:nth-child(1) .score', '55')

          .verify.containsText('div.leaderboard div:nth-child(2) .name', 'Ada Lovelace')
          .verify.containsText('div.leaderboard div:nth-child(2) .score', '50')

          //.setValue('input[type=text]', 'nightwatch')

          .end();
      }
    };

````


======================================
#### Licensing  
MIT License.
