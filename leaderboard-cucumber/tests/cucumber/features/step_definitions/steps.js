(function () {

  'use strict';

  module.exports = function () {

    var library = this;

    var leaderboardXpath = '//ol[@class="leaderboard"]',
        playerXpath = leaderboardXpath + '/li/span[contains(text(), "@playerName")]',
        playerScoreXpath = playerXpath + '/../span[@class="score"]';

    library.Given(/^I'm on the home page$/, function (next) {
      library.browser.
        url(library.cucumber.mirror.rootUrl).
        call(next);
    });

    library.When(/^I click on "([^"]*)"$/, function (playerName, next) {
      library.browser.
        click(playerXpath.replace('@playerName', playerName)).
        call(next);
    });

    library.When(/^I click add five points$/, function (next) {
      library.browser.
        waitForVisible('button.inc').
        click('button.inc').
        call(next);
    });

    library.Then(/^"([^"]*)" has a score of (\d+)$/, function (playerName, expectedScore, next) {
      library.browser.
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