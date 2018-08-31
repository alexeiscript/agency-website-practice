// while and do while loops

/*while (test condition){
    
    code to be run if condition is true;
    
}
*/

/*
var cars = 0;
console.log("before the start of the loop");

while (cars < 10){
    console.log("during the loop");
    console.log("number of cars " + cars);
    cars++;
}

console.log("the loop has ended");
*/

/*
var a = 1;

while(a <= 10){
    document.write(a+ "<br>");
    a++;
}




var b = 1;

do {
    document.write(b);
    b++;
}   while (b<=10);





var i=1;
var j=1;

var counters = 0;
var counters1 = 0;

for(i;i<=10;i++){
    for(j;j<=10;j++){
        
        //runs nested loop first        
        counters = counters + j + ", ";
        console.log(counters); //test the variables
        
    }
    
    //runs this loop next
    counters1=counters1 + i + ", ";
}

document.write(counters + counters1);
*/


//ARRAYS


/*
//simplest way to declare an array
var newArray = ["Ferrari", "Maserati"]
console.log(newArray);

//another way of declaring an array
var cars = new Array("Ferrari", "Maserati");
console.log(cars);
*/

//arrays are collections of anything
var items = ["Ferrari", "BMW", "Tesla", "Apples", "Seafood", "Sun"];


//inbuilt methods

//shift - removes first element from array and returns it
console.log(items.shift());
console.log(items);


//unshift - adds an element to the beginning of array
console.log(items.unshift("Lamborghini"));
console.log(items);


//push - adds an element at the end of array
console.log(items.push("Nice", "Island"));
console.log(items);




/*
var a = "test1";
var b = "test2";
var c = "test3";

items.push(a,b,c);

console.log(items);


//----------exercise1--------------------------------------


var event1 = document.getElementById("btn").addEventListener('click', task1);

function task1(){
    var testArray = ["nice", "meme"];
    
    var userInput1 = document.getElementById("input1").value;
    var userInput2 = document.getElementById("input2").value;
    var userInput3 = document.getElementById("input3").value;
    
    console.log(userInput1, userInput2, userInput3);
    
    testArray.push(userInput1, userInput2, userInput3);
    console.log(testArray);
    
    document.getElementById("display").innerHTML = testArray;
    
}
*/



//----------exercise2--------------------------------------


var event1 = document.getElementById("btn").addEventListener('click', task2);

function task2(){
    var newArray = [];
    
    var userInput4 = document.getElementById("input1").value;
    
    newArray.push(userInput4);
    
    
    document.getElementById("display").innerHTML = newArray + newArray.length;
    
}


//----------exercise3--------------------------------------


var thisArray = [1,2,3,4,5,6,7,8];
console.log(thisArray);


//adding one item at beginning
console.log(thisArray.unshift("zero"));
console.log(thisArray);

//adding item at end
console.log(thisArray.push(99));
console.log(thisArray);


//removing item from beginning
console.log(thisArray.shift());
console.log(thisArray);

//removing item from end
console.log(thisArray.pop());
console.log(thisArray);



//----------exercise4--------------------------------------


var thatArray = [9,10,11,12,13,14,15];
console.log(thisArray);


//adding item to array at specific index
console.log(thatArray.splice(2, 0, "hi"));
console.log(thatArray);




//----------exercise5--------------------------------------

var m = 2000
var n = 2018

var o = [];

for (var i = m; i <= 2018; i++){
    o.push(i);
    
}
document.write(o);



//----------exercise6--------------------------------------

var event = document.getElementById("btn2").addEventListener('click', task5);

function task5(){

//create the array
var countryArray = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];

//create user inpot variable
var userInput9 = document.getElementById("input2").value;


    
    
var searchResult = countryArray.indexOf(userInput9,0);

if(searchResult == -1){
    document.getElementById("display").innerHTML = "country not present in the list";
    
}
else {
    document.getElementById("display").innerHTML = "country is present in the list" + searchResult + "<br>";
    }

}

















