describe('Collection: Players', function () {

  it('some players are available in the collection', function () {
    expect(Players.find().count()).toBeGreaterThan(0);
  });

});

describe('Meteor methods', function () {
  describe('players/delete', function () {
    it('deletes the player with the given id', function () {
      var methods = Meteor.server.method_handlers;
      var playerId = Players.findOne()._id;
      methods['players/delete'].call({}, playerId);
      expect(Players.findOne(playerId)).toBeUndefined();
    });
  });
});
