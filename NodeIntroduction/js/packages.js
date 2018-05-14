const catMe = require('cat-me');
const kkj = require('knock-knock-jokes');
const faker = require('faker');

console.log(catMe() + '\n');
console.log(kkj());

// Generate 10 random product names and 10 random prices.
console.log('\nWelcome to my shop!');

var fakeCurrency = faker.finance.currencySymbol();

for (var i = 0; i < 10; i++) {
  var fakeProduct = faker.commerce.product();
  var fakeAdjective = faker.commerce.productAdjective();
  var fakePrice = faker.commerce.price();
  console.log(fakeAdjective + ' ' + fakeProduct + ' - ' + fakeCurrency + ' ' + fakePrice);
}
