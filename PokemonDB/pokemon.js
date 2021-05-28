const { count } = require("yargs");

const pokémon = Object.freeze([
  { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
  { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
  { "id": 9,   "name": "Blastoise",  "types": ["water"] },
  { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
  { "id": 23,  "name": "Ekans",      "types": ["poison"] },
  { "id": 24,  "name": "Arbok",      "types": ["poison"] },
  { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
  { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
  { "id": 52,  "name": "Meowth",     "types": ["normal"] },
  { "id": 63,  "name": "Abra",       "types": ["psychic"] },
  { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
  { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
  { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
  { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
  { "id": 98,  "name": "Krabby",     "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
  { "id": 133, "name": "Eevee",      "types": ["normal"] },
  { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//Por ejemplo, podríamos crear una lista de pokémon que tengan nombres que comiencen con la letra "B" usando el siguiente código.

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.table(bListPkmn);


const pokeIds = pokémon.map(index => index.id); 
console.table(pokeIds);

/* HACER LAS SIGUIENTES "CONSULTAS":*/

 //1) Una serie de objetos Pokémon donde la identificación es divisible por 3

 const pokeDiv = pokémon.filter(index => index.id % 3 === 0);
 console.table(pokeDiv); 

 //2) una serie de objetos Pokémon que son del tipo "fuego"

 const pokeFire = pokémon.filter(index => index.types.includes("fire")); //ingresar al valor de la key
 console.table(pokeFire);

 //3) Una variedad de objetos Pokémon que tienen más de un tipo
 const pokeTwotypes = pokémon.filter(index => index.types.length > 1);
 console.table(pokeTwotypes);

 //4) una matriz con solo los nombres de los Pokémon
 const pokeNames = pokémon.map(index => index.name);
 console.table(pokeNames);

 //5) Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
 const pokeGreater99 = pokémon.filter(index => index.id > 99);
 console.table(pokeGreater99);

 //6) una matriz con solo los nombres del pokémon cuyo único tipo es veneno
 const pokeVenom = pokémon.filter(index => index.types.length == 1 && index.types.includes("poison"));
 console.table(pokeVenom);

 //7) una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
 const pokeFly = pokémon.filter(index => index.types[1] === "flying").map(index => index.types[0]);
 console.table(pokeFly);

 //8) un recuento de la cantidad de pokémon que son de tipo "normal" 

 
 /* const counter = (pokémon) =>{
   let count = 0;
   for(val in )
   for(let i = 0; i<arr.length; i++){
     if(arr[i] === "normal"){count++};
   }
   return count;
 } */

 const pokeCount = pokémon.filter(({types})=> types.includes('normal')).length;
 console.log(pokeCount);

 

