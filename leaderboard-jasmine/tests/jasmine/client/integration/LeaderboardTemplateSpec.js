describe('Leaderboard template', function () {
  beforeEach(function render() {
    this.view = Blaze.render(
      Template.leaderboard,
      document.body
    );
    Tracker.flush();
  });

  beforeEach(function () {
    this.instance = this.view.templateInstance();
  });

  afterEach(function () {
    Blaze.remove(this.view);
  });

  describe('api', function () {
    describe('getSelectedPlayer', function () {
      describe('when a player is selected', function () {
        beforeEach(function () {
          this.originalPlayers = Players;
          Players = new Mongo.Collection(null);
          this.playerId = Players.insert({name: 'Max', score: 10});
          Session.set('selected_player', this.playerId);
        });

        afterEach(function () {
          Players = this.originalPlayers;
        });

        it('returns the selected player', function () {
          expect(this.instance.getSelectedPlayer())
            .toEqual(Players.findOne(this.playerId));
        });
      });
    });
  });
});
