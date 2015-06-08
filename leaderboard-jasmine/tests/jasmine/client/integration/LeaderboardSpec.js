var selectGraceHopper = function (callback) {
  Session.set("selected_player", Players.findOne({name: "Grace Hopper"})._id);
  if (callback) {
    Deps.afterFlush(callback);
  }
};

var unselectPlayer = function () {
  Session.set("selected_player", null);
};

beforeEach(function () {
  Players.find().forEach(function (player) {
    Players.remove(player._id);
  })

  PlayersService.generateRandomPlayers();
});

describe("Selecting Grace Hopper", function () {
  beforeEach(function (done) {
    Meteor.autorun(function (c) {
      var grace = Players.findOne({name: "Grace Hopper"});
      if (grace) {
        c.stop();
        selectGraceHopper(done);
      }
    })
  });

  it("should show Grace above the give points button", function () {
    expect($("div.details > div.name").html()).toEqual("Grace Hopper");
  });


  it("should highlight Grace's name", function () {
    var parentDiv = $("span.name:contains(Grace Hopper)").parent();
    expect(parentDiv.hasClass("selected")).toBe(true);
  });
});

describe('user interaction', function () {
  describe('clicking on the button "Give 5 points"', function () {
    beforeEach(function (done) {
      selectGraceHopper(done);
    });

    it('gives the selected player 5 points', function () {
      var graceInitialPoints = Players.findOne({name: 'Grace Hopper'}).score;
      $('button[data-action="give-points"]').click();
      expect(Players.findOne({name: 'Grace Hopper'}).score).toBe(graceInitialPoints + 5);
    });
  });
});

describe("players", function () {
  it("are ordered descending by score", function () {
    var playersHelper = Template.leaderboard.__helpers.get('players');
    var players = playersHelper().fetch();
    expect(players[0].score >= players[1].score).toBe(true);
  });
});

describe('Meteor methods', function () {
  describe('players/delete', function () {
    beforeEach(function () {
      this.originalPlayers = Players;
      Players = new Mongo.Collection(null);
      Players.insert({name: 'Max', score: 10});
    });

    afterEach(function () {
      Players = this.originalPlayers;
    });

    it('deletes the player with the given id', function () {
      var methods = Meteor.connection._methodHandlers;
      var playerId = Players.findOne()._id;
      methods['players/delete'].call({}, playerId);
      expect(Players.findOne(playerId)).toBeUndefined();
    });
  });
});
