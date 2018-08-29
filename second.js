










//var grade = "F";
var achievement;
var event = document.getElementById("btn").addEventListener('click',showComment);


function showComment() {
    var grade = document.getElementById("write").value;
    var text;

switch(grade){
    case "A": achievement = "Amazing";
    break;    
        
    case "B": achievement = "Very good";
    break;     
        
    case "C": achievement = "Good";
    break;     
        
    case "D": achievement = "Hmmmm";
    break;      
        
    case "E": achievement = "Oh, noo";
    break;      
        
    case "F": achievement = "OH GOD WHY";
    break;   
        
   
        
    default: achievement = "Sorry, this is confusing.";
}

document.getElementById("display").innerHTML = achievement;
    
}    