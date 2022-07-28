// In this file, we'll be using variables, conditionals,
// and loops to model a soccer match.


let eaglesOff = 5;
let dragonOff = 5;
let eaglesDef = 6;
let dragonDef = 3;

if (dragonOff > eaglesOff){
    console.log("Dragons have better offense");
}
    else if (eaglesOff > dragonOff){
    console.log("Eagles have a better offense");
}
    else {
        console.log("The two teams have the same offensive ability.");
    }

let eaglesScore = 0;
let dragonScore = 0;

if (dragonOff > eaglesDef){
    console.log("The Dragons have scored.");
    dragonScore += 1
}
    else {
        console.log("The game continues");
    }
/* Now the Eagles have the ball and are trying to score! Use an if/else to determine if the Dragons’ defense is enough to prevent them from scoring. If they do, console.log “The Eagles have scored.” and update the score. Otherwise, console.log “The game continues”. */
if (eaglesOff > dragonDef){
    console.log("The Eagles have scored.");
    eaglesScore += 1
} else{
    console.log("The game continues");
}
/* After playing a long time, the players are tired. The coach for the Eagles team decides to swap out one of the offensive players for their best offensive player. This player will raise the offense ability of the team by 5. However, the offense ability cannot canont exceed 10. Using an if else statement, increase the Eagles’ offense ability to the correct value. */
if(eaglesOff <= 5){
    eaglesOff += 5;
} else{
    eaglesOff = 10;
}
//The coach for the Dragons team is thinking about taking a timeout. She decides to flip a coin, and if the coin lands on heads, she will take a timeout. If it lands on tails, she won’t. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).
let coinLandsHeads = false;
if (coinLandsHeads != false){
    console.log("The Dragons coach calls timeout.")
} else {
    console.log("Let's keep playing.")
}
//Let’s see how this game will play out if it continues. Create a for loop to model the Eagles scoring 5 times. Console.log the scores of the teams after each goal.

for (let i=0; i < 5; i++){
    if (eaglesOff > dragonDef){
        console.log("The Eagles have scored.")
        eaglesScore = eaglesScore + 1;
        console.log(`And the scores are: Eagles ${eaglesScore} Dragons ${dragonScore}`);
    } else {
        console.log ("The game continues.");
    }
}

//Add an if statement that will only let the Dragons make a goal if their offense ability is greater than the Eagles’ defense ability.
if (dragonOff < 5){
    while (dragonOff > eaglesDef) {
            dragonsScore++;
    }
}
console.log(dragonScore);
