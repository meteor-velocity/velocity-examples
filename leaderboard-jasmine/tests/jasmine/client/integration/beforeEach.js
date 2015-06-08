beforeAll(function () {
  var self = this;

  self.deferAfterFlush = function (callback) {
    Tracker.afterFlush(function () {
      Meteor.defer(callback);
    });
  };
});

// Guarantee that tests don't run in a ongoing flush cycle.
beforeEach(function (done) {
  this.deferAfterFlush(done);
});
