// you can write js here
console.log('hello from file'); 
//let kelvins = 294;
// Je declare ma variable kelvins qui me renvoie un entier
let kelvins = prompt ("Quelle est la température en Kelvins aujourd'hui?");
// Je declare ma variable kelvins qui me renvoie une question en direct concernant la température actuel
let celsius = kelvins - 273;
// Je declare ma variable celsius qui me renvoie un entier
let Fahrenheits = celsius * (9/5) + 32;
// Je declare ma variable Fahrenheits qui me renvoie un nombre décimal

console.log(celsius);
// Affiche moi la valeur de ma variable celsius (kelvins - 273)
console.log(Math.floor (Fahrenheits));
// Affiche moi la valeur de Fahreneit arrondi a un entier
// Affiche moi la valeur de celsius
