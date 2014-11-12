(function () {

  'use strict';

  module.exports = function () {

    var library = this;

    library.World = function (next) {

      // when doing any Meteor.bindEnvironment the world is no longer attached to 'this'
      // so we keep the world instance on the cucumber library scope
      library.world = this;

      library.cucumber = Package['xolvio:cucumber'].cucumber;
      library.wdio = Package['xolvio:webdriver'].wdio;

      library.wdio.getGhostDriver({
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