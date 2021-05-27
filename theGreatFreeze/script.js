
//Object.freeze()
/* const arr = [1,2,3,4];
arr.push(300); // a pesar de que arr se declara con `const`, aún podemos introducir nuevos valores 

const arr = Object.freeze([1,2,3,4]);
arr.push(300); // ya no se nos permite cambiar `arr` */

//Spread, Concat, and Slice

const groceryList = Object.freeze([
  { "item": "carrots",           "haveIngredient": false },
  { "item": "onions",            "haveIngredient": true  },
  { "item": "celery",            "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter",            "haveIngredient": true  }
]);

const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ]; //crea una copia de los objetos de groceryList

//console.table(needThyme);

const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] ); //hace lo mismo que arriba

console.table(needThyme);