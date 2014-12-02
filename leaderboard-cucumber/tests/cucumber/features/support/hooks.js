(function () {

  'use strict';

  module.exports = function () {

    var helper = this;

    this.Before(function () {
      var world = helper.world;
      var next = arguments[arguments.length - 1];
      world.browser.
        init().
        call(function() {
          _resetPlayers(next);
        });
    });

    this.After(function () {
      var world = helper.world;
      var next = arguments[arguments.length - 1];
      world.browser.
        end().
        call(function () {
          next();
        });
    });

    var _resetPlayers = Meteor.bindEnvironment(function(next) {
      var connection = DDP.connect(helper.world.cucumber.mirror.host);
      connection.call('/fixtures/resetPlayers', function(err) {
        if (err) {
          next.fail('Error in /fixtures/resetPlayers DDP call to ' + helper.world.cucumber.mirror.host, err);
        } else {
          next();
        }
        connection.disconnect();
      });
    });

  };

})();