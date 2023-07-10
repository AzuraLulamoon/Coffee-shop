
//all drinks displayed in an array

const coffeeMenu = require('./coffee_data');

// coffeeMenu.forEach(name => console.log(name));

//drinks that have a price of 5 bucks or lower

let budgetDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price <= 5);

// console.log(budgetDrinks);

//drinks that have a price that is even

let evenDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price % 2 == 0);

// console.log(evenDrinks);

// sum of all drink prices

let prices = [8, 5, 5, 9, 6, 7, 6, 8, 10];
const initialValue = 0;
const sumWithInitial = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// console.log(sumWithInitial,"$");

//cant figure out how to pull the data from the coffee_data sheet
//built it out manually here to demonstrate that the syntax being used
//DOES work i just cant figure out how to pull the needed data

// seasonal bevage

let seasonalDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.seasonal === true);

// console.log(seasonalDrinks);

//seasonal bevage with message
// use .map?
