// you can write js here
// exo 5
console.log('exo-5');

let input = "numerique"
const voyelles = ["a","e","i","o","u","y"]

let resultArray = []
/*for(let i=0; i<input.length; i++){
   for(let j=0; j < voyelles.length; j++){
       if (input[i] == voyelles[j]){
            resultArray.push (voyelles[j])
        }
    }
}

console.log(resultArray.join("").toUpperCase()) */




for(let i=0; i<input.length; i++){
      if (voyelles.indexOf(input [i])> -1){
        resultArray.push (input[i])
      }
    }

    console.log(resultArray.join("").toUpperCase())
   