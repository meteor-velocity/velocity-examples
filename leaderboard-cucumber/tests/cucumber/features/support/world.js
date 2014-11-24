(function () {

  'use strict';

  module.exports = function () {

    var helper = this;

    this.World = function (next) {

      var world = helper.world = this;

      world.cucumber = Package['xolvio:cucumber'].cucumber;
      world.wdio = Package['xolvio:webdriver'].wdio;

      world.wdio.getGhostDriver({
        desiredCapabilities: {browserName: 'PhantomJs'},
        port: 4444,
        logLevel: 'silent'
      }, function (browser) {
        world.browser = browser;
        world.browser.call(next);
      });

    };

  };

})();