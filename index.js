
const coffeeMenu = require('./coffee_data');
//all drinks displayed in an array
// coffeeMenu.forEach(name => console.log(name));

//drinks that have a price of 5 bucks or lower
let budgetDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price <= 5);

// console.log(budgetDrinks);

//drinks that have a price that is even
let evenDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price % 2 == 0);

// console.log(evenDrinks);

//sum of all drink prices
// let prices = coffeeMenu.price;
// const initialValue = 0;
// const sumWithInitial = prices.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// can not figure out how to get this one to work for the life of me


// seasonal bevage
let seasonalDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.seasonal === true);

// console.log(seasonalDrinks);

//seasonal bevage with message
// use .map?
