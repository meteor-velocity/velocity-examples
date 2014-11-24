(function () {

  'use strict';

  module.exports = function () {

    var helper = this;

    var leaderboardXpath = '//ol[@class="leaderboard"]',
        playerXpath = leaderboardXpath + '/li/span[contains(text(), "@playerName")]',
        playerScoreXpath = playerXpath + '/../span[@class="score"]';

    this.Given(/^I'm on the home page$/, function (next) {
      var world = helper.world;
      world.browser.
        url(world.cucumber.mirror.rootUrl).
        call(next);
    });

    this.When(/^I click on "([^"]*)"$/, function (playerName, next) {
      var world = helper.world;
      world.browser.
        click(playerXpath.replace('@playerName', playerName)).
        call(next);
    });

    this.When(/^I click add five points$/, function (next) {
      var world = helper.world;
      world.browser.
        waitForVisible('button.inc').
        click('button.inc').
        call(next);
    });

    this.Then(/^"([^"]*)" has a score of (\d+)$/, function (playerName, expectedScore, next) {
      var world = helper.world;
      world.browser.
        getText(playerScoreXpath.replace('@playerName', playerName), function (error, actualScore) {
          if (actualScore !== expectedScore) {
            next.fail('' + actualScore + ' did not match ' + expectedScore);
          } else {
            next();
          }
        });
    });

  };

})();