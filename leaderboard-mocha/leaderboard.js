// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Players = new Meteor.Collection("players");

if (Meteor.isClient) {
  Meteor.subscribe("players");

  Template.leaderboard.helpers({
    players: function () {
      return Players.find({}, {sort: {score: -1, name: 1}});
    },
    selected_name: function () {
      var player = Players.findOne(Session.get("selected_player"));
      return player && player.name;
    }
  });

  Template.player.helpers({
    selected: function () {
      return Session.equals("selected_player", this._id) ? "selected" : '';
    }
  });

  window.givePoints = function(){
    Players.update(Session.get("selected_player"), {$inc: {score: 5}});
  }

  Template.leaderboard.events({
    'click input.inc': function () {
      givePoints()
    }
  });

  Template.player.events({
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.publish("players", function(){
    return Players.find();
  });

  Meteor.startup(function () {
    if (Players.find().count() === 0) {
      var names = ["Ada Lovelace",
                   "Grace Hopper",
                   "Marie Curie",
                   "Carl Friedrich Gauss",
                   "Nikola Tesla",
                   "Claude Shannon"];
      for (var i = 0; i < names.length; i++)
        Players.insert({name: names[i], score: Math.floor(Math.random()*10)*5});
    }
  });
}
