const prompt = require('prompt-sync')();
const age = prompt("enter the age: ");
if(age<18)
{
    console.log("you get 20% discount");
}
else if(age>=18 && age<=65)
{
    console.log("normal ticket applies");
}
else
{
    console.log("you get 30% discount");
}




