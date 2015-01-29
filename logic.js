// sample js file
x = 10; //this is a variable
userName= "Carolyn"; // string

teams = new Array();
teams =["Panthers", "Seahawks", "Colts"];

wins = [8, 12, 11];
losses = [4, 1, 2];

console.log("The teams are: " + teams);
console.log("Wins: " + wins);
console.log("Losses: " + losses);

console.log(teams.length);

document.write("The " + teams[0] + " had " + wins[0] + " wins.<br/>");
document.write("There are  " + teams.length + " teams in the league.<br/><br/>" );

for (var i=0; i<teams.length; i++){
    console.log(teams[i]);
    //document.write("The " + teams[i] + " had " + wins[i] + " wins.<br/>");
    
    if (wins[i] >= 10) {
        document.write(teams[i] + " is a good team.<br/>");
    }
    else{
        document.write(teams[i] + " is not such a good team.<br/>");
    }
}


if (wins[0] >= 10) {
    console.log("This is a good team.");
}

else{
    console.log("This is not such a good team.");
}