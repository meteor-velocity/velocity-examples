(function () {

  'use strict';

  module.exports = function () {

    var library = this;

    library.Before(function () {
      var next = arguments[arguments.length - 1];
      library.browser.
        init().
        url(library.cucumber.mirror.rootUrl + 'fixtures/resetPlayers').
        getText('//pre', function (e, v) {
          if (v !== 'undefined' && JSON.parse(v).status === 'OK') {
            next();
          } else {
            next.fail('Response from reset was ' + v.status ? v.status : v);
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