// alert pops up with a message on screen
//alert("javascript is linked");


// console displays output to the developer console
console.log("javascript is linked");
     


//data types

//strings = "whatever is between the quotation marks"
//numbers = 1
//boolean = true / false
//null = state of confusion with the value of null
//undefined = variable exists but has no value assigned
//Object 

//----------------------------------------------------------------

//declaring variables
/*
var name = "Alexei";
var salary; 



salary = 45000;

console.log(name);
console.log(salary);
*/
/*naming conventions for variables

1. use camelCase
2. variables names should always start with a letter and never start with numbers
3. variables names are case sensitive
4. never use keywords/reserved words as variables names

*/

/*function nameOfFunction() {
    var salary = 67000;
    console.log(name);
}

console.log(nameOfFunction);
*/

// an example of retrieve
var dom = document.getElementsByClassName("testClass");
var dom1 = document.getElementById("test");
console.log(dom);
console.log(dom1);

/*
function update() {
    dom1.
}
*/

//an example of create - creating DOM content
var newHeading = document.createElement("h1");

newHeading.innerHTML = "This heading was created in JS";

document.body.appendChild(newHeading);


//an example of update

//dom1.innerHTML = "changed";

//return title to console
console.log(document.title);


//change title
document.title = "completed";

var event1 = document.getElementById("mainImage").addEventListener('click', nameOfFunction);




function nameOfFunction () {
    
    console.log("tests that function is running");
    alert("OH NOO, you clicked on the image");
}





/*
var event2 = document.getElementById("button1").addEventListener('click', buttonClick);


/*function buttonClick() {
   // alert("Oh no, button has been clicked!")
    var userInput = document.getElementById("input1").value;
    console.log(userInput);
    document.getElementById("test").innerHTML = userInput;
}
*/
/*
function buttonClick() {
   // alert("Oh no, button has been clicked!")
    var userInput1 = document.getElementById("input1").value;
    var userInput2 = document.getElementById("input2").value;
    parseInt(input1,input2);
    document.getElementById("test").innerHTML = userInput1 + userInput2;
}

*/

//r event4 = document.getElementById("button1").addEventListener('click',addNumbers);
//nction addNumbers (){
  //var userInput1 = document.getElementById("a").value;
    //var userInput2 = document.getElementById("b").value;
    //var equality = ("the numbers are equal");
    //var userInput3 = document.getElementById("c").value;
    
    //parseInt converts a string into a number
   // var ofcourse = (parseInt(userInput1) + parseInt(userInput2)) * parseInt(userInput3);
    //var rresult = sum * parseInt(userInput3)
   // var plus = parseInt(userInput1) + parseInt(userInput2) + parseInt(userInput3);
   // var difference = ofcourse - plus;
    
   /* 
    if (userInput1 == userInput2){
        document.getElementById("result").innerHTML = equality;
    }
    else if (userInput1>userInput2){
       document.getElementById("result").innerHTML = userInput1; 
}
    
    else {document.getElementById("result").innerHTML = userInput2;
         }
       */
    
  //document.getElementById("result").innerHTML = userInput1 - 1;
  //document.getElementById("resultt").innerHTML = parseInt(userInput1) + 1;

//syntax for an if statement
/*
if (statement that we will evaluate){
    if statement is true run this code
}



else {
    run this code
}
*/
/*
var temperature = 10;

if (temperature == 10) {
    console.log("statement was true");
}
else {
    console.log("statement was false");
}
*/

/*
//r event4 = document.getElementById("button1").addEventListener('click',addNumbers);
var event = document.getElementById("button1").addEventListener('click',display);

function (display) {
    var userInput1 = document.getElementById("a").value;

    
    if  (userInput1 < 0) {
            document.getElementById("result").innerHTML = "number is negative";
    }
    else if ( userInput1 >10) {
            document.getElementById("result").innerHTML = "number is less than 10";
    }

    else {
        document.getElementById("result").innerHTML = "number is greater than 10";
    }



}
*/




/*

var event1 = document.getElementById("button1").addEventListener('click',theCondition);

function theCondition (){
    var userInput1 = parseInt(document.getElementById("a").value);

    if (userInput1 < 0) {
        document.getElementById("result").innerHTML = "number is negative";
    }

    else if (userInput1 > 10) {
        document.getElementById("result").innerHTML = "number is greater than 10";
    }
    
    else if (userInput1 === 10) {
        document.getElementById("result").innerHTML = "number equals to 10";
    }
    
    else {
        document.getElementById("result").innerHTML = "number is less than 10";
    }
    
}

*/


// syntax SWITCH

switch (expression/condition) {
    case condition 1: code to run / statement
    break;
      
    case condition 2: code to run / statement
    break;    
    
    case condition 3: code to run / statement
    break;
        
    case condition 4: code to run / statement
    break;    
        
    default: code to run / statement;    
}


































