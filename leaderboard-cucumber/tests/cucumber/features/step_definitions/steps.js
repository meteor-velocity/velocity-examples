(function () {

  'use strict';

  var bindEnv = Meteor.bindEnvironment;

  module.exports = function () {

    // - - - - - WORLD.JS - - - - -
    this.World = bindEnv(function (next) {
      next();
    });

    // - - - - - HOOKS.JS - - - - -
    this.Before(bindEnv(function () {
      var next = arguments[arguments.length - 1];
      Meteor.call('reset', next);
    }));
    this.After(bindEnv(function () {
      var next = arguments[arguments.length - 1];
      next();
    }));

    // - - - - - STEPS.JS - - - - -
    this.Given(/^I am on the leaderboard page$/, bindEnv(function (next) {
      next();
    }));
    this.When(/^I click on "([^"]*)"$/, bindEnv(function (playerName, next) {
      next();
    }));
    this.Then(/^"([^"]*)" has a score of (\d+)$/, bindEnv(function (playerName, expectedScore, next) {
      next();
    }));

  };

})();