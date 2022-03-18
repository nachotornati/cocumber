const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
  if (today == 'Friday'){
    return 'TGIF'
  }
  return 'Nope';
    
}

Given('today is {string}', function (someDay) {
    this.today = someDay;
  });

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Given('operator is {int}', function (someNumber) {
    this.number = someNumber;
 });

 When('I ask how much the sum twice', function () {
    return this.number + this.number
});

Then('I should receive {int}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});