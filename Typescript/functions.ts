//Addtion
function add(a:number ,b:number){ //a, b =parameters
console.log(a+b);
}
add(10,20); //arguments


function addition(x:number, y:number){
return x+y

}
const sum = addition(10,20);
console.log(sum);


function great(){
    console.log("Test");
}
great()


function message (){
return "Hello"

}
const msg =message()
console.log(msg);


function printXpattern (size:number){ 

    if (size <= 0 || !Number.isInteger(size)) {
    console.log("Please provide a positive integer for the size.");
    return;
  }

for (let i = 0; i < size ; i++) { //outer loop for rows
    let line = ""
   for (let j = 0; j < size ; j++){ //Inner loop for columns
    if (i==j) {
        line += "X"
    }else{
         line += ""
    }
    }
    console.log(line);
    
   }
    
}

printXpattern(5);
console.log("\n");
printXpattern(7);


function printRightAngleStarPattern(rows:number) {
  for (let i = 1; i <= rows; i++) {
    let rowPattern = "";
    for (let j = 1; j <= rows -i+1; j++) {
     rowPattern = rowPattern.concat("*");
    }
    console.log(rowPattern);
  }
}
printRightAngleStarPattern(5);  


//Annonymous function
let annonymousFun = function(a:number ,b:number){
  //console.log(a-b)
  return a-b
}


//Arrow Function

//(a:number ,b:number) => console.log(a*b);

//