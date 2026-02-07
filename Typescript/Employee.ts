//This is a class

import { log } from "node:console"

/*
Class - Blueprint to create an object

ES6 - ECMA SCRIPT 2015 - that is format - before this there is no class concepts in JS/TS.

class is collection of properties and methods

Class name should be similar to the file name and clas name should start with capital latter (Employee.ts)

//syntax -

class ClassName{

//Proprties -varialbles -locators

key: datatype
private key1 : datatype
static key2 : datatype ="ABC"
readonly key3 : datatype

}

in class no need to write let or const 
and no need to write function keyword also

Access modifiers:

key: datatype
private key1 : datatype
static key2 : datatype ="ABC"
readonly key3 : datatype

*/

class Employee{

   empID :number
   empName : string
   private empSalary :number
   static orgName : string ="ABC"
   readonly offer

//Constructor -Special type of function or methods which helps us in terms of intialzng the values of variables

//this- keyword refer to current object of class

//need to use keyword in JS/TS - as constructor
constructor(eid:number ,ename:string , eSalary:number , eoffer:number){
 this.empID = eid
 this.empName =ename
 this.empSalary =eSalary
 this.offer =eoffer

}

empInformation():void{
  console.log(`EmployeeID :${this.empID} , EmployeeName :${this.empName}`)
    
}

static displayOrgName(){
  console.log(Employee.orgName)

}


}

//create object of class and store in const
const emp = new Employee(1,"Vinod",10000,1000)
console.log(emp.empID)

const emp1 = new Employee(1,"Mangesh",10000,1000)
console.log(emp1.empID)
