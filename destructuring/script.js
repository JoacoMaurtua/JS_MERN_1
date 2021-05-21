/********Destructuring*********/

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
}

const animals = ['horse', 'dog', 'fish', 'cat', 'bird']; 

//Before ES6

var email = person.email;
console.log(email);
var firstAnimal = animals[0];
console.log(firstAnimal); 

//After ES6

const { email } = persona;
const [firstAnimal] = animals; //los valores de las varoables van en orden a como estan las propiedades
console.log(email);
console.log(firstAnimal); 

const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;


console.log(email,password);
console.log(firstAnimal, secondAnimal, thirdAnimal);


/****Conflictos de nombre*****/

const password ='12345';              // variable exterta a la estructura cuyo nombre es igual a una propiedad

const {password:hashedPassword} = person;

console.log(hashedPassword);
 
/****Destructuracion anidada*****/

const {addresses:[WhiteHouse, sherlock]} = person;
console.log(WhiteHouse); 


/******EJERCICIO PREDECIR LA DESESTRUCTURACION******/

//Predecir el ouput

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars //Tesla
const [ ,otherRandomCar ] = cars //Mercedes
//Predict the output
//console.log(randomCar)
//console.log(otherRandomCar)

/***********************************************************/

const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla'
}
const { name:otherName } = employee;
//Predict the output
//console.log(name);
//console.log(otherName);

/***********************************************************/

const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword); //undefined 

/***********************************************************/

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers;//2
//Predict the output
console.log(first == second); //false
console.log(first == third); //true */

/***********************************************************/

const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //value
const { secondKey } = lastTest; // [1,5,1,8,3,3]
const [ ,willThisWork] = secondKey; //5/error
//Predict the output
console.log(key); //value
console.log(secondKey); //[1,5,1,8,3,3]
console.log(secondKey[0]); //1
console.log(willThisWork);//5