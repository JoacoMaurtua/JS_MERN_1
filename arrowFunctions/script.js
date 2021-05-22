// notación a mano para devolver un objeto
// NOTA: el primer conjunto de corchetes define el cuerpo de la función
// ay el segundo conjunto de corchetes son para crear el objeto literal
const returnObjLonghand = () => {
  return { 
      firstName: 'John',
      lastName: 'Wick'
  }
}
/**
*  
* los corchetes se interpretan como la apertura del cuerpo de 
* la función en lugar de corchetes para crear un objeto literal 
*/
//const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// rodear el retorno implícito entre parentesis resuelve el problema
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

/* La sintaxis elegante no es el único cambio con las funciones de flecha. También heredan el contexto del ámbito primario. Para demostrar esto, creemos una clase de baraja de cartas. */

class Deck {
  constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
    for (const suit of suits) {
      for (const face of faces) {
        deck.push(this.createCard(suit, face));
      }
    }
    this.deck = deck;
  }
}


/*Uso de operador ternario*/
let accountBalance = 1000;
const drone = 1002;

let droneOnSale = drone - drone *0.03;

let canAfford = (itemPrice, accountBalance)=>{
  itemPrice>accountBalance
  ? "No puedes comprarla!"
  : 'puedes';
}

console.log(canAfford(drone,accountBalance));

