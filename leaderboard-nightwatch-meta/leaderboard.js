// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Players = new Meteor.Collection("players");

if (Meteor.isClient) {
  Meteor.subscribe('players');

  Template.leaderboard.helpers({
    players: function(){
      return Players.find({}, {sort: {score: -1, name: 1}});
    },
    selected_name: function () {
      var player = Players.findOne(Session.get("selected_player"));
      return player && player.name;
    },
    selected: function () {
      return Session.equals("selected_player", this._id) ? "selected" : '';
    },
  });


  Template.leaderboard.events({
    'click input.inc': function () {
      Players.update(Session.get("selected_player"), {$inc: {score: 5}});
    },
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });


  Template.body.events({
    'click #startRunnerButton':function(){
      Meteor.call('startRunner', function(error,result){
        console.log('error',error);
        console.log('result',result);
      });
    }
  });

}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.publish('players', function(){
      return Players.find();
    });
    if (Players.find().count() === 0) {
      Players.insert({
        name: 'Ada Lovelace',
        score: 50
      });
      Players.insert({
        name: 'Grace Hopper',
        score: 40
      });
      Players.insert({
        name: 'Marie Curie',
        score: 20
      });
      Players.insert({
        name: 'Carl Friedrich Gauss',
        score: 5
      });
      Players.insert({
        name: 'Nikola Tesla',
        score: 25
      });
      Players.insert({
        name: 'Claude Shannon',
        score: 35
      });
    }

  });
}
