///////////////QUICKSORT WHIT ES6//////////

let array = [4,8,5,7,1,6,10,2,3,9];

/* const Swap = (a,b) =>{
  let aux;
  aux = a;
  a = b;
  b = aux;
} */

const QuickSort = (array) => {
  if(array.length == 1) {return array}; //caso base

  const pivote = array[array.length-1];

  const leftArr = [];
  const rightArr = [];

  for(let i = 0; i<array.length-1;i++){

    array[i]<pivote ? leftArr.push(array[i]) : rightArr.push(array[i]); //menores al pivote van en leftarr, mayores en rightarr

  }
  //recursivamente vamos devolviendo valores en estos 3 escenarios

  if(leftArr.length>0 && rightArr.length>0){
      return[...QuickSort(leftArr), pivote, ...QuickSort(rightArr)]; //separa los valores de cada array en comas y los inserta literalmente
  }
  else if(leftArr.length>0){
      return[...QuickSort(leftArr),pivote];
  }
  else{
    return[pivote, ...QuickSort(rightArr)];
  }
}

console.log(QuickSort(array));
