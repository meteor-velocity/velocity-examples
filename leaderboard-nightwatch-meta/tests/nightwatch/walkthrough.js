// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

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

      .click('div.leaderboard div:nth-child(2)').pause(200)
      .click('input.inc')
      .verify.containsText('div.leaderboard div:nth-child(2) .name', 'Grace Hopper')
      .verify.containsText('div.leaderboard div:nth-child(2) .score', '50')

      .click('div.leaderboard div:nth-child(2)').pause(200)
      .click('input.inc')
      .verify.containsText('div.leaderboard div:nth-child(1) .name', 'Grace Hopper')
      .verify.containsText('div.leaderboard div:nth-child(1) .score', '55')

      .verify.containsText('div.leaderboard div:nth-child(2) .name', 'Ada Lovelace')
      .verify.containsText('div.leaderboard div:nth-child(2) .score', '50')

      .end();

  }
};
