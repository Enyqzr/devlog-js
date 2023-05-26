// you can write js here
console.log('exo-2');
const myDate = new Date ()
console.log(myDate.getDay())
const isTesting = true
const semaine = "jour de la semaine"
const weekend = "c'est le weelkend"
const heure = myDate.getHours()


function testing(){
    if(isTesting){
        const hour = prompt ("Quelle heure ?")
        const day = prompt ("Quel jour?")
        const month = prompt ("Quel mois?")
        const year = prompt ("Quelle année?")
        const myDate = new Date (year, month - 1, day, hour)
        console.log(myDate)
    } else {
            console.log(myDate.getDay())
        }
    
}
testing();

function isWeek (myDateParameter){
    return myDateParameter.getDay() > 0
    &&  myDateParameter.getDay() < 6
}

function fridayWeekend (date){

    return date.getDay()===5 && heure >16;
}

function mondayWeekend (date){
    return date.getDay()===1 && heure < 9;
}

    if (isWeek(myDate) && (fridayWeekend(myDate)===false)&&(mondayWeekend(myDate)===false)){
       console.log(semaine)
    } else {
        console.log(weekend)
    }
    


    //if (isWeek(myDate) && (FridayWeekend(myDate)==false)){
        //console.log(semaine)
    //}
    //else {
        //console.log (weekend)
    //}

//console.log(isWeek(myDate))
//console.log(heure)


