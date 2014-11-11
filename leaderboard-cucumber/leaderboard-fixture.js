// TODO THIS FILE SHOULD BE IN THE /TESTS DIRECTORY AND VELOCITY WILL COPY IT TO THE MIRROR
// IN HERE FOR TESTING WITHOUT A MIRROR FOR NOW


(function () {

  'use strict';

  Router.route('/', function () {
    this.render('');
  });

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
      'reset': function () {
        _resetPlayers();
      }
    });

  }

  Router.map(function () {
    this.route('reset', {
      where: 'server',
      path: '/reset',
      action: function () {
        _resetPlayers();
        this.response.writeHead(200, {'Content-Type': 'text/html'});
        this.response.end('<span>OK</span>');
      }
    });
  });

})();