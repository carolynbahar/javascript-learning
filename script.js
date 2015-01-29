var todayDate = new Date();
var name = "Carolyn";

function doThis(){
    document.write("<h1>Hello " + name + "!<br/></h1>");
    document.write("Today is " + todayDate +"<br/>");
}

function paragraphFunction(){
    document.getElementById("paragraph").innerHTML="WOW! You clicked the button and I'm a different paragrpah. WOW! You clicked the button and I'm a different paragrpah. WOW! You clicked the button and I'm a different paragrpah.";
    alert("wooooo!");
}

doThis();