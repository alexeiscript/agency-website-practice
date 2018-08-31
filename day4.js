
/*

var event1 = document.getElementById("btn").addEventListener('click', generate);

var ourNumber = Math.floor(Math.random() * 101);
var counter = 0;
function generate (){
    
    var userInput = document.getElementById("guess").value;
   
        
    if (userInput > ourNumber){
       document.getElementById("resultguess").innerHTML = "Number is too big."; 
        counter++;
    }
    
    else if (userInput == ourNumber){
        document.getElementById("resultguess").innerHTML = "YAY, BINGO!";
        counter++;
        document.getElementById("numberOfGuesses").innerHTML = "You took " + counter +" guesses.";
    }
    else {
        document.getElementById("resultguess").innerHTML = "Number is too small.";
       counter++;
    }
    console.log(ourNumber);   
    
}

//-----------------------------------------------------------------------------------------------------------


var event2 = document.getElementById("bttn").addEventListener('click', collect);

var list = [];


function collect (){
    var nameInput = document.getElementById("inputBox").value;
    
    list.push(nameInput);
    console.log(list);
    displayList();
}

var event3 = document.getElementById("btton").addEventListener('click', selectWinner);


function displayList (){
     var index;
     var text = "<ul>"
     for (index = 0; index < list.length; index++){
     if (index===0){
        text += "<div><span>The entries are:</span><li>" + list[index] + "</li></div>";
   }
    else {
        text += "<div><li>" + list[index] + "</li></div>";
    }
    
   }
    
    text += "</ul>";
    document.getElementById("participants").innerHTML = text;
}


function selectWinner (){
    
    var randomName = list[Math.floor(Math.random() * list.length)];
    document.getElementById("theResult").innerHTML = "The winner is " + randomName; 
}

*/

// -------------- OBJECTS ---------------

/*
An object is an unordered collection of properties. 
It is comprised of name, value pairs.
*/


var students = new Object();


// [] are the operator that takes the students object and sets its property using a string
students["FirstName"] = "Auwais";
students["Surname"] = "Hilton";

console.log(students);


var firstNameProperty = "FirstName";


console.log(students[firstNameProperty]);

//the following way is better practice - however the syntax parser will understand both
console.log(students.FirstName);

console.log(students.Surname);

// creating object inside object
students.address = new Object();


//the dot works from left to right creating new name valur pairs
students.address.doorNumber = 50;
students.address.streetName = "Minories Road";
students.address.postcode = "EC1 3YZ";

console.log(students);


console.log(students.address.doorNumber);


// object literal - alternative way of declaring an object - when syntax parser sees curly brackets it sees it as a new object
var chocolate = {
    
    "brand": "Twix", 
    "numberOf Bars": 2,
    "color": "Gold",
    "price": 1
    
}



console.log(chocolate.brand, chocolate.color);


//creating object inside object

var car = {
    
    "brand": "BMW", 
    "model": 640,
    "color": "Gold",
        
    price: {
        currency: "£",
        country: "UK",
        dealer: "German Power LTD"
    },
    
    "ourFunction": function(){
        return car.brand;
    }
    
}
console.log(car.ourFunction);







function greeting (){
    console.log("Good afternoon");
}

greeting();

greeting.language="English";

console.log(greeting.language);




// For an object to be object oriented, it needs to have these 4 basic capabilities:

// - inheritance - the ability ofclasses to rely upon each other for their properties and methods
// - polymorphism - to have one function/method that works in more than one way
// - encapsulation - the ability to store related information whether data (primitive types), methods together in an object
// - aggregation - the ability to have objects within an object




var london = {
    "surface": 10000,
    "population": 1000000,
    "country": "England"
}

console.log(london);
document.write(london.surface, london.country, london.population);










var wine = {
    
    "brand": "Bordeaux", 
    "country": "France",
    "color": "Red",
        
   
    "ourFunction": function(){
        return wine.brand;
    }
    
}


console.log(wine);
document.write(wine.ourFunction());



//-------------------------------------------------------------------------



var property = {
    
    "size": "Big",
    "location": "Mountains",
    "price": 200000,
    
    type: {
        house: "Wooden",
        flat: "Large",
        apartment: "Big"
    }
    
}

document.write(property.type.house);




