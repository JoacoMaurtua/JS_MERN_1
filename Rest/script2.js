//Parametros REST => su proposito es capturar el resto de los datos

const suma = (a, b, ...z) => {
  let result = a + b;
  z.forEach((n) => {
    //lo mismo que (function(n){result += n;})
    result += n;
  });
  return result;
};

console.log(suma(4, 6, 3, 2));

//Operador Spread => almacenar multiples argumentos

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

//mezclarlos en un mismo array
const arr3 = [...arr1, ...arr2];
console.table(arr3);
