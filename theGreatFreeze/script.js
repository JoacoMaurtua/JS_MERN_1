
//Object.freeze()
/* const arr = [1,2,3,4];
arr.push(300); // a pesar de que arr se declara con `const`, aún podemos introducir nuevos valores 

const arr = Object.freeze([1,2,3,4]);
arr.push(300); // ya no se nos permite cambiar `arr` */

//Spread, Concat, and Slice

const groceryList = Object.freeze([// array de objetos
  { "item": "carrots",           "haveIngredient": false },
  { "item": "onions",            "haveIngredient": true  },
  { "item": "celery",            "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter",            "haveIngredient": true  }
]);

/* const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ]; //crea una copia de los objetos de groceryList

console.table(needThyme); */

const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] ); //hace lo mismo que arriba

console.table(needThyme); 

/* Si descubrimos que ya tenemos "thyme" y queremos establecer "haveIngredient" en verdadero, podemos escribir algo como ... */

const gotTheThyme = [...needThyme.slice(0,5),{...needThyme[5],"haveIngredient":true}];

console.table(gotTheThyme);

/* Si el apio es "ingrediente no grata", podríamos eliminarlo también usando un slice() ... */

const notNeceCelery = [...gotTheThyme.slice(0,2),...gotTheThyme.slice(3)]; //nos da los ingredientes del indice 0-1 y de 3 hacia el final

console.table(notNeceCelery);

const items = Object.freeze(["larrots","onions","celery","mushrooms","butter","thyme"]);

//items.sort() --> error
const sortedItems = [...items].sort();
console.log(sortedItems);                 //orden alfabetico

//para numeros tendria que ser asi:
const numbers = [10, 5, 3, 12, 22, 8];
//numbers.sort(); --> esto retornará [10, 12, 22, 3, 5, 8 ]


//para ordenar un array con
const ordenados = numbers.sort(function(prev,next){
  return prev-next;
});
//en version arroy function:
//const ordenados = numbers.sort((prev,next)=> prev-next);

console.log(ordenados);

//PARA ORDENAR UN OBJETO:
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );


console.table(sortedGroceries);