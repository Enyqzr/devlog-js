// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//console.log(secretMessage.length);
//Afficher mon tableau

let last = secretMessage.pop()

let first = secretMessage[0];
// Accéder au prmeier élément du tableau

let lastMsg = secretMessage[secretMessage.lenghth - 1]
// Accéder au dernier élément de mon tableau

let newLength = secretMessage.push('to','program')
//J'ajoute en fin de tableau 2 nouvelle chaine de caractère

let remove = secretMessage[6] = "right"
//Je change le contenu de l'index 6 par la chaine de caractere "right"

let supFirst = secretMessage.shift()
// Je supprime l'index 0 de mon tableau

let newFirst = secretMessage.unshift('Programming')
// Ajoute au debut de mon tableau la chaine de caractere : Programming

let removeFifth = secretMessage.splice(5, 5, 'know')
//console.log(removeFifth)






console.log(secretMessage.join(' '))



