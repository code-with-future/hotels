const guest= ["vanshi", "mira", "vensi", "radhi", "dhruvisha", "briya"];

function checkguest(name){
    if(guest.includes(name)){
        console.log("welcome to the party "+name)
    }
    else{
        console.log("you are not invaited!")
    }
}

const prompt = require('prompt-sync')();
const nameguest = prompt("enter the name of guest: ");
checkguest(nameguest);
