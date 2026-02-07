//Object - Object is combinations of Key value pair

const human =
{
   name : "Raj",
   age : "25",
   address : {
    city : "Pune",
    Pin : "411031"
   } ,
   skills : ["Pune" , "Mumbai" ,"Delhi"]
}


console.log(human.name)
console.log(human.address)
console.log(human.address.city)
console.log(human.skills)
console.log(human.skills[0])


//2nd way :

console.log(human["age"]);

//JSON file to store the data
//JSON - Javascripts Object natation 


{
 // "name" : "a",

}

//TO import json fle into TS/JS

//import data from '../Testdata/logindata.json'

