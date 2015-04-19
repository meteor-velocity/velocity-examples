(function () {

  'use strict';

  module.exports = function () {

    var leaderboardXpath = '//ol[@class="leaderboard"]',
        playerXpath = leaderboardXpath + '/li/span[contains(text(), "@playerName")]',
        playerScoreXpath = playerXpath + '/../span[@class="score"]';

    this.Given(/^I'm on the home page$/, function (next) {
      this.browser.
        url(process.env.HOST).
        call(next);
    });

    this.Given(/^"([^"]*)" has a score of (\d+)$/, function (playerName, score) {
      return this.ddp.callAsync('/fixtures/setPlayerScore', [playerName, score]);
    });

    this.When(/^I click on "([^"]*)"$/, function (playerName, next) {
      this.browser.
        waitForVisible(playerXpath.replace('@playerName', playerName)).
        click(playerXpath.replace('@playerName', playerName)).
        call(next);
    });

    this.When(/^I click add five points$/, function (next) {
      this.browser.
        waitForVisible('button.inc').
        click('button.inc').
        call(next);
    });

    this.Given(/^"([^"]*)" will have a score of (\d+)$/, function (playerName, expectedScore, callback) {
      this.browser.
        getText(playerScoreXpath.replace('@playerName', playerName)).
        should.become(expectedScore).
        and.notify(callback);
    });

  };

})();