// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "Velocity Framework Walkthrough" : function (client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible('body', 1000)

      // make sure the leaderboard is loaded
      .waitForElementVisible('div#outer', 1000)
      .waitForElementVisible('div.leaderboard', 1000)
      .waitForElementVisible('.leaderboard .player', 1000)
      .verify.elementPresent('div.leaderboard div:nth-child(1) .name')
      .verify.elementPresent('div.leaderboard div:nth-child(1) .score')
      .verify.elementPresent('div.leaderboard div:nth-child(6) .name')
      .verify.elementPresent('div.leaderboard div:nth-child(6) .score')


      //make sure velocity is loaded
      .verify.elementPresent("#velocity-status-widget")
      .verify.cssClassPresent("#velocity-status-widget", 'pending')
      .verify.cssClassPresent("#velocity-status-widget", 'display-toggle')
      .verify.elementPresent("#velocity-status-widget .velocity-icon-status")

      //the velocity overlay should be present, but hidden
      .verify.elementPresent("#velocityOverlay")
      .verify.cssClassPresent('#velocityOverlay', "pending")

      .verify.elementPresent("#velocityOverlay .velocity-btn-close")
      .verify.elementPresent("#velocityOverlay .velocity-logo")
      .verify.elementPresent("#velocityOverlay .velocity-icon-status")
      .verify.elementPresent("#velocityOverlay .velocity-icon-total")
      .verify.elementPresent("#velocityOverlay .velocity-icon-time")
      .verify.elementPresent("#velocityOverlay .velocity-summary-text")

      // .verify.containsText("#velocityOverlay .velocity-icon-total small", "Pass")
      // .verify.containsText("#velocityOverlay .velocity-icon-time span", "0 tests passed in 0 ms")

      .verify.elementPresent("#velocityOverlay .velocity-options-toggle")
      .verify.elementPresent("#velocityOverlay .velocity-options-toggle .velocity-icon-cog")

      .verify.elementPresent("#velocityOverlay .velocity-options")
      .verify.cssClassNotPresent('#velocityOverlay .velocity-options', "visible")

      .verify.elementPresent("#velocityOverlay .velocity-options #showSuccessful")
      .verify.elementPresent("#velocityOverlay .velocity-options #showLogs")
      .verify.elementPresent("#velocityOverlay .velocity-options #showFiles")
      .verify.elementPresent("#velocityOverlay .velocity-options #runNightwatchTests")

      // and has no nightwatch test results
      .verify.elementPresent("#velocityOverlay .velocity-report")
      .verify.cssClassPresent('#velocityOverlay .velocity-report', "empty")

      // click on velocity widget
      .click("#velocity-status-widget").pause(300)
      .verify.cssClassPresent('#velocityOverlay', "pending")

      // and then our options button
      .click("#velocityOverlay .velocity-options").pause(300)
      .verify.cssClassNotPresent('#velocityOverlay .velocity-options', "visible")

      // lets show all tests
      .click("#showSuccessful").pause(300)

      // now lets run our tests
      .click("#runNightwatchTests").pause(300)

      // wait for a minute
      .pause(30000)

      // check that results are loaded in the table
      .verify.elementPresent("#velocityOverlay .velocity-report .velocity-section-header")
      .verify.elementPresent("#velocityOverlay .velocity-report .velocity-section-header .velocity-section-name")
      .verify.containsText("#velocityOverlay .velocity-report .velocity-section-header .velocity-section-name", "nightwatch")

      .verify.elementPresent("#velocityOverlay .velocity-report .velocity-suite")
      .verify.elementPresent("#velocityOverlay .velocity-report .velocity-suite .velocity-suite-header")
      // .verify.elementPresent("#velocityOverlay .velocity-report .velocity-suite .velocity-suite-header .velocity-section-name")

      .verify.elementPresent("#velocityOverlay .velocity-report .velocity-suite .velocity-result-table .velocity-test:nth-child(1)")
      .verify.containsText("#velocityOverlay .velocity-report .velocity-suite .velocity-result-table .velocity-test:nth-child(1)", "Element was visible")




      // and that our results are correct

      // .verify.elementPresent("#velocityOverlay .velocity-icon-status")
      //.verify.elementPresent("#velocityOverlay .velocity-icon-total")
      //.verify.containsText("#velocityOverlay .velocity-icon-total", "Pass")
      //.verify.containsText("#velocityOverlay .velocity-summary-text")



      .end();

  }
};
