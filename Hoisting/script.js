/********HOISTING********/

//mean();
//console.log(food);
function mean(){
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
//console.log(food);



//console.log(genre); //undefined
var genre = "disco"; 
//rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
} 
//console.log(genre); 


dojo = "san jose";
//console.log(dojo);
//learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
//console.log(dojo);  

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {}; //crea un objeto vacio
    dojo.name = name; //le da una propiedad llamada name cuyo valor es name
    dojo.students = students; //le da una propiedad students con el valor students
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.aviso = "closed for now";
    }
    return dojo;
}