
var question =  document.getElementById("question");

var choiceA = document.getElementById("A"); 

var choiceB = document.getElementById("B");

var choiceC= document.getElementById("C");

var choiceD= document.getElementById("D");

var buttons = document.getElementsByClassName("4buttons");

var choice1 = document.getElementById("choice1");

var choice2 = document.getElementById("choice2");

var choice3 = document.getElementById("choice3");

var choice4 = document.getElementById("choice4");

var CorFal = document.getElementById("CF");

var ABCD = document.getElementsByClassName("ABCD");



function question1() {
    question.innerHTML = "";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";
    
    ABCD.addEventListener("click", function(event){
        preventDefault(event);
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    })
};

function question2() {
    question.innerHTML = "";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";

    ABCD.addEventListener("click", function(event){
        preventDefault(event);
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    })
};

function question3() {
    question.innerHTML = "";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";

    ABCD.addEventListener("click", function(event){
        preventDefault(event);
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    })
};

function question4() {
    question.innerHTML = "";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";

    ABCD.addEventListener("click", function(event){
        preventDefault(event);
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    })
};

function question5() {
    question.innerHTML = "";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";

    ABCD.addEventListener("click", function(event){
        preventDefault(event);
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    })
};

function question6() {
    question.innerHTML = "";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";

    ABCD.addEventListener("click", function(event){
        preventDefault(event);
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    })
};

function question7() {
    question.innerHTML = "";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";

    ABCD.addEventListener("click", function(event){
        preventDefault(event);
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    })
};

function question8() {
    question.innerHTML = "";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";

    ABCD.addEventListener("click", function(event){
        preventDefault(event);
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    })
};
/* stringify

mathfloor math Random 

for iteration 

keydown button hidden to revealed

create a timer in absolute position if timer -- 0 s -- then jump to final tab


create a enter keydown event for when the user makes their quiz answer choice

create a local storage memory of their answers and create conditional statements to the correct choice

if choice is right add to correct tally variable

if choice is wrong add to wrong tally variable and subtract 5 sec from clock

display in a fraction format at the score section of user choice/total score = percentage score
A, B, C etc letter grade

create a list of user score compared to local storage memory of other peoples scores


create a function for each quiz question that contains:
the new question
the new choices
the right answer in a randomly selected position
*/