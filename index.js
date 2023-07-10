//this is the connection page for later
const coffeeMenu = require('./coffee_data');
//displayed as
console.log(coffeeMenu);

let budgetDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price <= 5);

console.log(budgetDrinks);