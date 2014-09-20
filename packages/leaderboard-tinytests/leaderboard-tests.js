

Tinytest.add('Template.leaderboard.players()', function (test) {

  var someLocalCollectionCursor = {};
  Players.find = function (selector, options) {
      test.equal(options.sort.score, -1);
      test.equal(options.sort.name, 1);
      // expect(options.sort.score).toBe(-1);
      // expect(options.sort.name).toBe(1);
      return someLocalCollectionCursor;
  };

  test.equal(Template.leaderboard.players(), someLocalCollectionCursor);
  //expect(Template.leaderboard.players()).toBe(someLocalCollectionCursor);
});


Tinytest.add('Template.leaderboard.selected_name()', function (test) {

  // returns player when player is found and has a name
  Players.findOne = function () {
      return {name: 'Tom'};
  };
  test.equal(Template.leaderboard.selected_name(), "Tom");


  // returns undefined when player.name isn't present
  Players.findOne = function () {
      return {};
  };
  test.equal(Template.leaderboard.selected_name(), undefined);

  // returns undefined when player doesn't exist
  Players.findOne = function () {
      return undefined;
  };
  test.equal(Template.leaderboard.selected_name(), undefined);

});


Tinytest.add('Template.player.selected()', function (test) {

  // returns selected when the selected player in the session matches player in the current template
  Template.player._id = 1234;
  Session.set('selected_player', 1234);
  test.equal(Template.player.selected(), "selected");


  // returns empty string when the selected player in the session doesn't matches player in the current template
  Template.player._id = 4321;
  Session.set('selected_player', 1234);
  test.equal(Template.player.selected(), "");
});


Tinytest.add('Template.leaderboard [click input.inc] event', function (test) {

  //updates the player score by 5 when input.inc is clicked
  Session.set('selected_player', 1234);
  Players.update = function (selector, options) {
      test.equal(selector, 1234);
      test.equal(options.$inc.score, 5);
  };
  Template.leaderboard.fireEvent('click input.inc');
});


Tinytest.add('Template.player [click] event', function (test) {

  //clicking a player sets them to the selected player in the session
  Template.player.addContextAttribute('_id', 888);
  Template.player.fireEvent('click');
  test.equal(Session.get("selected_player"), 888);

});
