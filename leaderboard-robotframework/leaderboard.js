Players = new Mongo.Collection('players');

(function () {

  'use strict';

  // Set up a collection to contain player information. On the server,
  // it is backed by a MongoDB collection named 'players'.

  if (Meteor.isClient) {

    Template.leaderboard.helpers({
      players: function () {
        return Players.find({}, {sort: {score: -1, name: 1}});
      },
      selectedName: function () {
        var player = Players.findOne(Session.get('selectedPlayer'));
        return player && player.name;
      }
    });

    Template.leaderboard.events({
      'click .inc': function () {
        Players.update(Session.get('selectedPlayer'), {$inc: {score: 5}});
      }
    });

    Template.player.helpers({
      selected: function () {
        return Session.equals('selectedPlayer', this._id) ? 'selected' : '';
      }
    });

    Template.player.events({
      'click': function () {
        Session.set('selectedPlayer', this._id);
      }
    });
  }

// On server startup, create some players if the database is empty.
  if (Meteor.isServer) {

    Meteor.startup(function () {

      if (Players.find().count() === 0) {
        var names = ['Ada Lovelace', 'Grace Hopper', 'Marie Curie',
          'Carl Friedrich Gauss', 'Nikola Tesla', 'Claude Shannon'];
        var id = 0;
        _.each(names, function (name, _index) {
          Players.insert({
            name: name,
            pid: ++id,
            score: _index * 5
          });
        });
      }
    });

  }

  // adding this to suppress the noisy auto-publish error from meteor.
  if (Meteor.isClient) {
    Meteor.subscribe('players');
  } else {
    Meteor.publish('players', function () {
      return Players.find();
    });
  }

})();