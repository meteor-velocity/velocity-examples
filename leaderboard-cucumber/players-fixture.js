// TODO THIS FILE SHOULD BE IN THE /TESTS DIRECTORY AND VELOCITY WILL COPY IT TO THE MIRROR
// IN HERE FOR TESTING WITHOUT THE MIRROR FOR NOW

Router.route('/', function () {
  this.render('');
});

if (Meteor.isServer) {

  var resetPlayers = function () {
    Players.remove({});
    var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
      "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
    _.each(names, function (name, _index) {
      Players.insert({
        name: name,
        score: _index * 5
      });
    });
  };

  Meteor.methods({
    'resetPlayers' : function() {
      console.log('resetting');
      resetPlayers();
      return('return from resetPlayers');
    }
  });

  Router.map(function () {
    this.route('resetPlayers', {
      where: 'server',
      path: '/reset-players',
      action: function () {
        resetPlayers();
        this.response.writeHead(200, {'Content-Type': 'text/html'});
        this.response.end('<span>OK</span>');
      }
    });
  });

 }