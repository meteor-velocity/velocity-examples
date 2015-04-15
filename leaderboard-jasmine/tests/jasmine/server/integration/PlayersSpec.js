describe('Collection: Players', function () {

  it('some players are available in the collection', function () {
    expect(Players.find().count()).toBeGreaterThan(0);
  });

});
