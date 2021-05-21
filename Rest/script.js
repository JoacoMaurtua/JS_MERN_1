
/******Con arrays*****/

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const[firstAnimal, secondAnimal, ...otherAnimal] = animals;

console.log(otherAnimal);


/******Con objetos*****/

const person = {
  firstName: 'Bob',
  lastName: 'Marley',
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
  addresses: [
    {
      address: '1600 Pennsylvania Avenue',
      city: 'Washington, D.C.',
      zipcode: '20500',
    },
    {
      address: '221B Baker St.',
      city: 'London',
      zipcode: 'WC2N 5DU',
    }
  ],
  createdAt: 1543945177623
};

const {...attributes } = person;

//console.log(attributes);

//Usando spread podemos hacer rápidamente copias completas de objetos o arrays.

const personCopy = { ...person };
console.log(personCopy);

/* Hay algunas limitaciones La copia es poco profunda, por lo que cualquier estructura compleja o 
anidada con referencias de objetos todavía apuntará al mismo objeto. 
Usaremos nuestros objetos personales para demostrar. */

console.log(personCopy==person);
console.log(personCopy.addresses === person.addresses);