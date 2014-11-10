(function () {

  'use strict';

  module.exports = function () {

    var bindEnv = function (fn, handler, self) {

      var bound = Meteor.bindEnvironment(function () {
        return fn.apply(self, arguments);
      }, handler, self);

      return function () {
        if (self == null) {
          self = this;
        }
        return bound.apply(self, arguments);
      };

    };

    var cuke = this;

    // - - - - - SETUP WORLD - - - - -
    cuke.World = bindEnv(function (next) {
      var wdio = Package['xolvio:webdriver'].wdio;
      cuke.browser = new wdio.getGhostDriverClient({
        desiredCapabilities: {browserName: 'PhantomJs'},
        logLevel: 'debug'
      });

      cuke.browser.url('http://localhost:3000', function () {
        console.log('* ** * * * * waitForExist', arguments);
      });

      next();
      console.log('cuke.World next');
    });

    // - - - - - SETUP HOOKS - - - - -
    cuke.Before(bindEnv(function () {
      var next = arguments[arguments.length - 1];
      Meteor.call('resetPlayers');
      next();
    }));

    // - - - - - SETUP STEPS - - - - -
    cuke.Given(/^I am on the leaderboard page$/, bindEnv(function (next) {
      cuke.browser.url('http://localhost:3000').
        waitForExist('span.name', function () {
          console.log('* ** * * * * waitForExist', arguments);
        }).call(function () {
          console.log('calls');
          //next();
        });
      next();
    }));

    cuke.When(/^I click on "([^"]*)"$/, bindEnv(function (playerName, next) {
      //cuke.world.browser.
      //  waitForVisible('//*[contains(text(), \'' + playerName + '\')]').
      //  click('//*[contains(text(), \'' + playerName + '\')]').
      //  waitForVisible('button.inc').
      //  click('button.inc').
      //  call(next);
      next();
      //next.fail();
    }));

    cuke.Then(/^"([^"]*)" has a score of (\d+)$/, bindEnv(function (playerName, expectedScore, next) {
      //cuke.world.browser.
      //  getText('//*[contains(text(), \'' + playerName + '\')]/../span[@class="score"]', function (error, actualScore) {
      //    cuke.orld.assert.equal(undefined, error);
      //    cuke.world.assert.equal(actualScore, expectedScore);
      //    if (actualScore !== expectedScore) {
      //      next.fail('' + actualScore + ' did not match ' + expectedScore);
      //    }
      //    next();
      //  });
      next();
    }));

    cuke.After(bindEnv(function () {
      var next = arguments[arguments.length - 1];
      cuke.browser.end();
      next();
    }));
  };

})();