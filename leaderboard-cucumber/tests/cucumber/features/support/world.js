(function () {

  'use strict';

  module.exports = function () {

    var library = this;

    library.World = function (next) {

      // when doing any Meteor.bindEnvironment the world is no longer attached to 'this'
      // so we keep the world instance on the cucumber library scope
      library.world = this;

      var wdio = Package['xolvio:webdriver'].wdio;

      wdio.getGhostDriver({
        desiredCapabilities: {browserName: 'PhantomJs'},
        port: 4444,
        logLevel: 'silent'
      }, function (browser) {
        library.browser = browser;
        library.browser.
          call(next);
      });

    };

  };

})();