Feature: Calculator
  Everybody wants to calculate things

Scenario Outline: Sum of Numbers
    Given operator is <number>
    When I ask how much the sum twice
    Then I should receive "<answer>"

  Examples:
    | number    | answer |
    | 2         | 4      |
    | 3         | 6      |
    | 4         | 8      |