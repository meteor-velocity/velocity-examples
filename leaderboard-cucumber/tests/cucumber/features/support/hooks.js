(function () {

  'use strict';

  module.exports = function () {

    var library = this;

    library.Before(function () {
      var next = arguments[arguments.length - 1];
      library.browser.
        init().
        url('http://localhost:3000/fixtures/resetPlayers').
        getText('//pre', function(e, v) {
          if (JSON.parse(v).status === 'OK') {
            next();
          } else {
            next.fail('Response from reset was ' + v.status);
          }
        });
    });

    library.After(function () {
      var next = arguments[arguments.length - 1];
      library.browser.
        end().
        call(next);
    });

  };

})();