/*MAP()*/

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
//const groceryList = groceries.map(function(item){return `<li>${item}</li>`}); //lo mismo pero usando function

console.table(groceryList);

const values = [1,2,3,4,5];
const cubes = values.map(val => val**3);
//const cubes = values.map(function(val){return val**3});

console.table(cubes);

/*Filter()*/

const numbers = [1, 2, 3, 4, 5];
const pares = numbers.filter( val => val % 2 === 0); //true or false

console.log(pares);

//del array de mas arriba
const oFoods = groceries.filter( item => item.includes("o") );

//Incluso podemos juntar map() y filter():
const oddCubes = numbers.filter( val => val % 2 !== 0).map(val => val**3);
console.log(oddCubes);