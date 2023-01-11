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

var next = document.getElementById("next");

var previous = document.getElementById("previous");

var choicetextA = choiceA.childNodes[2];

var choicetextB = choiceB.childNodes[2];
var choicetextC = choiceC.childNodes[2];
var choicetextD = choiceD.childNodes[2];



question1();

function question1() {
    question.innerHTML += "";
    choicetextA.nodeValue = "A";
    choicetextB.nodeValue = "g";
    choicetextC.nodeValue = "d";
    choicetextD.textContent = "d";

    next.addEventListener("click", function(event){
        event.preventDefault();
        
        question2();
    });

    ABCD.addEventListener("click", function(event){
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    });
   

};

function question2() {
    question.innerHTML += "";
    choicetextA.nodeValue = "B";
    choicetextB.nodeValue = "g";
    choicetextC.nodeValue = "d";
    choicetextD.textContent = "F";

    next.addEventListener("click", function(event){
        event.preventDefault();
        question3();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question1();
    });

    ABCD.addEventListener("click", function(event){
        event.preventDefault();
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    });

};

function question3() {
    question.innerHTML += "";
    choicetextA.nodeValue = "B";
    choicetextB.nodeValue = "g";
    choicetextC.nodeValue = "d";
    choicetextD.textContent = "F";
    next.addEventListener("click", function(event){
        event.preventDefault();
        question4();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question2();
    });


    ABCD.addEventListener("click", function(event){
        event.preventDefault();
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    });

};

function question4() {
    question.innerHTML += "";
    choicetextA.nodeValue = "B";
    choicetextB.nodeValue = "g";
    choicetextC.nodeValue = "d";
    choicetextD.textContent = "F";

    next.addEventListener("click", function(event){
        event.preventDefault();
        question5();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question3();
    });


    ABCD.addEventListener("click", function(event){
        event.preventDefault();
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    });
};

function question5() {
    question.innerHTML += "";
    choicetextA.nodeValue = "B";
    choicetextB.nodeValue = "g";
    choicetextC.nodeValue = "d";
    choicetextD.textContent = "F";

    next.addEventListener("click", function(event){
        event.preventDefault();
        question6();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question4();
    });

    ABCD.addEventListener("click", function(event){
        event.preventDefault();
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    });
};

function question6() {
    question.innerHTML += "";
    choicetextA.nodeValue = "B";
    choicetextB.nodeValue = "g";
    choicetextC.nodeValue = "d";
    choicetextD.textContent = "F";

    next.addEventListener("click", function(event){
        event.preventDefault();
        question7();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question5();
    });


    ABCD.addEventListener("click", function(event){
        event.preventDefault();
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    });
};

function question7() {
    question.innerHTML += "";
    choicetextA.nodeValue = "B";
    choicetextB.nodeValue = "g";
    choicetextC.nodeValue = "d";
    choicetextD.textContent = "F";

    next.addEventListener("click", function(event){
        event.preventDefault();
        question8();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question6();
    });

    ABCD.addEventListener("click", function(event){
        event.preventDefault();
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    });
};

function question8() {
    question.innerHTML += "";
    choicetextA.nodeValue = "B";
    choicetextB.nodeValue = "g";
    choicetextC.nodeValue = "d";
    choicetextD.textContent = "F";

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question7();
    });

    ABCD.addEventListener("click", function(event){
        event.preventDefault();
        if (event.currentTarget.id == "choice1"){
            CorFal.innerHTML = "Correct!";

            //add score to local storage change button style to permanent color onclick
        } else {
            CorFal.innerHTML = "False!";
            //add score to local storage subtract time
        };

    });
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