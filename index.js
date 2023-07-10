//this is the connection page for later
const coffeeMenu = require('./coffee_data');
//displayed as
console.log(coffeeMenu);

//drinks that have a price of 5 bucks or lower
let budgetDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price <= 5);

console.log(budgetDrinks);

//drinks that have a price that is even
let evenDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price % 2 == 0);

console.log(evenDrinks);

//