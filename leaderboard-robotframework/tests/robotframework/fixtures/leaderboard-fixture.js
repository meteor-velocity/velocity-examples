
// Create application - level namespace object for client-side fixture methods
fixtures = {};

(function() {
  'use strict';

  if (Meteor.isServer) {

    // create a predictable set of players and score to test with
    var _resetPlayers = function () {
      Players.remove({});
      var names = ['Ada Lovelace', 'Grace Hopper', 'Marie Curie',
        'Carl Friedrich Gauss', 'Nikola Tesla', 'Claude Shannon'];
      _.each(names, function (name, _index) {
        Players.insert({
          name: name,
          score: _index * 5
        });
      });
    };

    Meteor.methods({
      '/fixtures/resetPlayers': function () {
        _resetPlayers();
      }
    });

    Meteor.methods({
      '/fixtures/setPlayerScore': function (name, score) {
        Players.update({name: name}, {$set: {score: parseInt(score)}});
      }
    });

  }

  if (Meteor.isClient) {

    // Add client fixture methods to global object.
    // Invoke from Robot Framework test using Selenium2Library's Execute Javascript keyword:
    //   Execute Javascript  fixtures.resetPlayers();

    fixtures.resetPlayers = function (callback) {
      Meteor.call('/fixtures/resetPlayers', function(err) {
        if (err) {
          callback ('Error in /fixtures/resetPlayers call:' + err);
        } else {
          callback();
        }
      });
    };

    fixtures.setPlayerScore = function (playerName, score, callback) {
      Meteor.call('/fixtures/setPlayerScore', playerName, score, function (err) {
        if (err) {
          callback ('Error in /fixtures/setPlayerScore call:' + err);
        } else {
          callback();
        }
      })
    };

  }


})();

