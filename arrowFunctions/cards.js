
class Deck {
  createCard = ( string1, string2) =>  string1+' '+string2 ;
  constructor() {
      const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
      const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      const deck = [];
      

      suits.forEach(suit => {
        faces.forEach(face => {
          deck.push(this.createCard(suit, face));
        });
      });
      this.deck = deck;
    }
}

const baraja = new Deck;
console.table(baraja.deck);



