//Parametros REST

const suma = (a,b,...z)=>{
  let result = a+b;
  z.forEach( n => { //lo mismo que (function(n){result += n;})
    result += n;
  })
  return result
}

console.log(suma(4,6,3,2));