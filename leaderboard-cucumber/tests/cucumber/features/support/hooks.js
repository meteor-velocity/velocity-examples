(function () {

  'use strict';

  module.exports = function () {

    this.Before(function (callback) {
      this.ddp.call('/fixtures/resetPlayers', [], callback);
    });

  };

})();