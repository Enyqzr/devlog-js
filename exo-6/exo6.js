// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.

/*console.log(joeInfo.cars.length)

// Afficher le nombre de voiture de Joe 

joeInfo.bathrooms = 1
console.log(joeInfo.bathrooms)

// Changer le nombre de salle de bain de Joe

joeInfo.garage = true 
console.log(joeInfo.garage) */

// Joe a maintenant un garage 


var team = {
   players : [{
    firstName : "Yakarie",
    lastName : "Petit-Tonerre",
    age : 21,
   }],

   games : [{
    opponent : "Hichamos",
    teamPoints : 82,
    opponentPoints : 1,
   }],
   addPlayer: function(firstName,lastName,age){
    return  this.players.push({
        firstName,
        lastName,
        age,
    })
    },
    addGames: function(opponent, teamPoints, opponentPoints){
        return this.games.push({
            opponent,
            teamPoints,
            opponentPoints,
        })
    }
}
team.addPlayer("Bastien","Pastille",19)
team.addPlayer("Uges", "Jackamn", 24)
team.addGames("Locos", 49 , 2)
team.addGames("CampusNum", 55 , 40)
console.log(team)
let total=0
team.games.forEach(zak =>{
    total+= zak.teamPoints
});
let totalAdv = 0
  team.games.forEach(ugo =>{
      totalAdv += ugo.opponentPoints
  });
  function oldest () {
      let max
      for(let i = 0; i < team.players.length ; i++){
          if(!max){
              max =team.players[i]
          }
          if (max.age<team.players[i].age){
              max =team.players[i]
          }
      }
      return max
  }
let moy = totalAdv/team.games.length

let sortPlayer = team.players.sort(function(a,b){
    var textA=a.lastName.toUpperCase()
    var textB=b.lastName.toUpperCase()
    return textA.localeCompare(textB)

})
console.log(team.games, "total de nos point :", total,"moyenne des points Adverses :",  moy, "Le plus agé",oldest(), "joueur par ordre alpha", sortPlayer)

