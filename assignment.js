// first problem

function feetToMile(feet) {
    var mile =  feet / 5280;
    return mile;
}



// second problem

function woodCalculator(table, chair, bed) {
    var tableAmount = table * 3;
    var chairAmount = chair * 1;
    var bedAmount = bed * 5;
    var total = tableAmount + chairAmount + bedAmount;
    return total;
}






// third problem

function brickCalculator(floor) {
   var feet = 1000;
   var firststep;
   var secondstep;
   var thirdstep;
   if(floor <= 10){
       var firststep = feet * 15 * floor;
       return firststep;
       
   }
    else if(floor > 10 && floor <= 20){
       var secondstep = feet * 12 * floor;
       return firststep + secondstep;
       
   }
    else if(floor > 20){
       var thirdstep = feet * 10 *floor;
       return firststep + secondstep + thirdstep;
   }
}
var output = brickCalculator(10);
console.log(output);
   
    













// fourth problem

function tinyFriend(names) {
    var smallest = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < smallest.length){
            smallest = currentName;
        }
    }
    return smallest;
}
var smallName = tinyFriend(['sufian', 'sazid', 'hasib', 'mithun', 'abu', 'kashfiqujjaman', 'akib'])
console.log(smallName);