Feature: Player score can be increased manually

  As a score keeper in some hypothetical game
  I want to manually give a player five points
  So that I can publicly display an up-to-date scoreboard

  Scenario: Give 5 points to a player
    Given I am on the leaderboard page
    And "Grace Hopper" has a score of 5
    When I click on "Grace Hopper"
    Then "Grace Hopper" has a score of 10

