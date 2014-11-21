leaderboard-nightwatch
======================

Ultra simple acceptance testing for Meteor, using [Nightwatch.js](http://nightwatchjs.org/);


-----------------------------------------
####  Version  

Meteor@0.9.2.2


-----------------------------------------
####  Requirements  

  - Meteor
  - Firefox


-----------------------------------------
####  Installation of Leaderboard Example

````sh
# Should be as simple as cloning the repository...  
terminal-a$ git clone https://github.com/awatson1978/leaderboard-nightwatch.git

# run the leaderboard application
terminal-a$ cd leaderboard-nightwatch
terminal-a$ meteor

# and then, in the same way that we run 'meteor mongo' in a separate terminal
# while our application is already running,
# we want to open up a new terminal, and run
terminal-b$ ./run_nightwatch.sh

# if you want to rerun the acceptance tests, go back to the first terminal
# and be sure to reset the database
terminal-a$ ctrl-c
terminal-a$ meteor reset
terminal-a$ meteor
````


-----------------------------------------
####  Writing Acceptance Tests
Check out this ultra-simple syntax for writing acceptance tests, and testing your Meteor app's user interface.  All you need to do is add files to the ``/tests/nightwatch`` directory, and follow this syntax.  

For more information on syntax you can use, check out the [Nightwatch API](http://nightwatchjs.org/api#assert-attributeEquals);
````js
// tests/nightwatch/leaderboard.js

  browser
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
````


-----------------------------------------
#### Licensing  
MIT License.
