///CALLBACKS

setTimeout(function(){
  console.log("start");
}, 3000);

console.log("end"); //imprime end y despues de 3000 ms imprime start

console.log(typeof("hello"));

console.log(typeof(function(){})); 

const exampleFunction = (message) =>{
  console.log(message);
}
exampleFunction("Hello there!");

parentFunction = (callback) =>{ //a menudo debe ser anonima(sin nombre)
  callback("information from the parent function");
}

//llamando a la funcion padre
parentFunction(exampleFunction);
