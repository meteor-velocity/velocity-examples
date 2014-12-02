Feature: Player score can be increased manually1

  As a score keeper in some hypothetical game
  I want to manually give a player five points
  So that I can publicly display an up-to-date scoreboard

  Scenario: Give 5 points to a player1
    Given I'm on the home page
    And "Grace Hopper" has a score of 50
    When I click on "Grace Hopper"
    And I click add five points
    Then "Grace Hopper" will have a score of 55


