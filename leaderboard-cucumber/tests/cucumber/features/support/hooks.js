(function () {

  'use strict';

  module.exports = function () {

    var herlper = this;

    this.Before(function () {
      var world = herlper.world;
      var next = arguments[arguments.length-1];
      world.browser.
        init().
        url(world.cucumber.mirror.rootUrl + 'fixtures/resetPlayers').
        getText('//pre', function (e, v) {
          if (v !== 'undefined' && JSON.parse(v).status === 'OK') {
            next();
          } else {
            next.fail('Response from reset was ' + v.status ? v.status : v);
          }
        });
    });

    this.After(function () {
      var world = herlper.world;
      var next = arguments[arguments.length-1];
      world.browser.
        end().
        call(function() {
          next();
        });
    });

  };

})();