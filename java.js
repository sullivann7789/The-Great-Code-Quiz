var question =  document.getElementById("question");

var choiceA = document.getElementById("A"); 

var choiceB = document.getElementById("B");

var choiceC= document.getElementById("C");

var choiceD= document.getElementById("D");

var buttons = document.getElementsByClassName("answer");

var choice1 = document.getElementById("choice1");

var choice2 = document.getElementById("choice2");

var choice3 = document.getElementById("choice3");

var choice4 = document.getElementById("choice4");

var CorFal = document.getElementById("CF");

var fbuttons = document.querySelectorAll(".fbuttons");

var next = document.getElementById("next");

var previous = document.getElementById("previous");

var choicetextA = choiceA.childNodes[2];

var choicetextB = choiceB.childNodes[2];
var choicetextC = choiceC.childNodes[2];
var choicetextD = choiceD.childNodes[2];

var score = {
    correct: 0,
    wrong: 0,
};

console.log(score);


question1();

function question1() {

    question.innerHTML = "What does JQuery do?";
    /*choicetextA.nodeValue = "Allow code and syntax to become more compact and dynamic";
    choicetextB.nodeValue = "Create an environment for hosting APIs";
    choicetextC.nodeValue = "A Text file Structure to substitute HTML";
    choicetextD.textContent = "A function in JavaScript syntax";*/
    CorFal.innerHTML = "";

    var answers1 = {
    q1a : "Allow code and syntax to become more compact and dynamic",
    q1b : "Create an environment for hosting APIs",
    q1c : "A Text file Structure to substitute HTML",
    q1d : "A function in JavaScript syntax",
    };
    console.log(answers1);

    var answers1string = Object.values(answers1);

    console.log(answers1string[0]);

    console.log(answers1string[3]);
    var comchoice = Math.floor(Math.random()* buttons.length);
    console.log(buttons[comchoice]);
    var randomselection = buttons[comchoice];
    var randominput = randomselection.childNodes[2];
    
    console.log(randominput);
    console.log(buttons[0].childNodes[2].nodeValue);

    for (let i = 1; i < buttons.length; i++) {
        var element = buttons[i];
        Math.floor(Math.random()* fbuttons.length) 
        element.childNodes[2].nodeValue = answers1string[i];
        randominput.nodeValue = answers1string[0];
        if(randominput.nodeValue != buttons[0].childNodes[2].nodeValue ) {
            buttons[0].childNodes[2].nodeValue = answers1string[comchoice];
        }
    }};

        //if (randominput.nodeValue != )
        /*fbuttons[comchoice].addEventListener('click', function(ev){
            ev.preventDefault();
            ev.stopPropagation();
            CorFal.innerHTML = "Correct";
            var addcor = score.correct++;
            addcor.stopPropagation
            console.log(score);
        })*/
        


        /*fbuttons[0].addEventListener("click", function(ev){
            ev.preventDefault();
            ev.stopPropagation();
            CorFal.innerHTML = "Correct";
            var addcor = score.correct++;
            addcor.stopPropagation
            console.log(score);
        });

            //add score to local storage change button style to permanent color onclick
        fbuttons[1].addEventListener('click', function(event){
            event.preventDefault();
            event.stopImmediatePropagation();
            score.wrong++;
            CorFal.innerHTML = "False";
        }
            ); 
            //add score to local storage subtract time
        

        fbuttons[2].addEventListener('click', function(event){
            event.preventDefault();
            event.stopImmediatePropagation();
            var addfal = score.wrong++;
            addfal.stopPropagation;
            CorFal.innerHTML = "False";
            //add score to local storage subtract time
        });

        fbuttons[3].addEventListener('click', function(event){
            event.preventDefault();
            event.stopImmediatePropagation();
            score.wrong++;
            CorFal.innerHTML = "False";
            //add score to local storage subtract time
        });

        next.addEventListener('click', function(ev){
            //ev.stopPropagation();
            ev.preventDefault();
            question2();
        });*/


    


function question2() {

    question.innerHTML = "What does the .nodeValue event handler do?";
    choicetextA.nodeValue = "Provide the value of the parent element";
    choicetextB.nodeValue = "Create a new Node";
    choicetextC.nodeValue = "Provide the internal value of the element";
    choicetextD.textContent = "Generate a random number value";
    CorFal.innerHTML = "";



    previous.addEventListener("click", function(event){
        event.preventDefault();
        question1();
    });

    fbuttons[2].addEventListener("click", function(event){
        event.preventDefault();
        CorFal.innerHTML = "Correct";
        event.stopImmediatePropagation();
        score.correct++;
        console.log(score);
    });

    fbuttons[0].addEventListener('click', function(event){
        event.preventDefault();
        CorFal.innerHTML = "False";
        event.stopImmediatePropagation();
        score.wrong++;
    }
        ); 
        //add score to local storage subtract time
    

    fbuttons[1].addEventListener('click', function(event){
        event.preventDefault();
        CorFal.innerHTML = "False";
        event.stopImmediatePropagation();
        score.wrong++;
        //add score to local storage subtract time
    });

    fbuttons[3].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

    next.addEventListener('click', function(ev){
        ev.stopPropagation();
        ev.preventDefault();
        question3();
    });

    };

function question3() {

    question.innerHTML = "What is the purpose of event handler .addEventListener('keydown',function())?";
    choicetextA.nodeValue = "Provides which key is being pressed on";
    choicetextB.nodeValue = "Lists the musical key of your favorite rap song";
    choicetextC.nodeValue = "Provides an event after a key has been pressed on";
    choicetextD.textContent = "Provides an event when a key is being pressed on ";
    CorFal.innerHTML = "";

    next.addEventListener('click', function(ev){
        ev.stopPropagation();
        ev.preventDefault();
        question4();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question2();
    });


    fbuttons[3].addEventListener("click", function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.correct++;
        CorFal.innerHTML = "Correct";
        console.log(score);
    });

        //add score to local storage change button style to permanent color onclick
    fbuttons[1].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
    }
        ); 
        //add score to local storage subtract time
    

    fbuttons[2].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

    fbuttons[0].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

};

function question4() {
    question.innerHTML = "What HTML element do you use if you want to create a clickable link?";
    choicetextA.nodeValue = "<src>";
    choicetextB.nodeValue = "<href=''>";
    choicetextC.nodeValue = "<a href=''>";
    choicetextD.textContent = "<script>";
    CorFal.innerHTML = "";

    next.addEventListener('click', function(ev){
        ev.stopPropagation();
        ev.preventDefault();
        question5();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question3();
    });


    fbuttons[2].addEventListener("click", function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.correct++;
        CorFal.innerHTML = "Correct";
        console.log(score);
    });

        //add score to local storage change button style to permanent color onclick
    fbuttons[1].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
    }
        ); 
        //add score to local storage subtract time
    

    fbuttons[0].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

    fbuttons[3].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

};

function question5() {
    question.innerHTML = "How do you add an element, or code structure (such as text), to another HTML element using JS?";
    choicetextA.nodeValue = ".add";
    choicetextB.nodeValue = ".append or .appendChild";
    choicetextC.nodeValue = ".createElement";
    choicetextD.textContent = ".textContent";
    CorFal.innerHTML = "";

    next.addEventListener('click', function(ev){
        ev.stopPropagation();
        ev.preventDefault();
        question6();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question4();
    });


    fbuttons[1].addEventListener("click", function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.correct++;
        CorFal.innerHTML = "Correct";
        console.log(score);
    });

        //add score to local storage change button style to permanent color onclick
    fbuttons[0].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
    }
        ); 
        //add score to local storage subtract time
    

    fbuttons[2].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

    fbuttons[3].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

};

function question6() {
    question.innerHTML = "How do you convert text into a JavaScript object using JavaScript?";
    choicetextA.nodeValue = "var x = 'text'; ";
    choicetextB.nodeValue = "document.getElementByID";
    choicetextC.nodeValue = "item.innerHTML = ";
    choicetextD.textContent = "JSON.parse()";
    CorFal.innerHTML = "";

    next.addEventListener('click', function(ev){
        ev.stopPropagation();
        ev.preventDefault();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question5();
    });


    fbuttons[3].addEventListener("click", function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.correct++;
        CorFal.innerHTML = "Correct";
        console.log(score);
    });

        //add score to local storage change button style to permanent color onclick
    fbuttons[1].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
    }
        ); 
        //add score to local storage subtract time
    

    fbuttons[2].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

    fbuttons[0].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

};

function question7() {
    question.innerHTML = "How do you store an object in storage?";
    choicetextA.nodeValue = "console.log(object)";
    choicetextB.nodeValue = "localStorage.setItem()";
    choicetextC.nodeValue = "localStorage.log()";
    choicetextD.textContent = "localStorage.console.log(object)";
    CorFal.innerHTML = "";

    next.addEventListener('click', function(ev){
        ev.stopPropagation();
        ev.preventDefault();
    });

    previous.addEventListener("click", function(event){
        event.preventDefault();
        question6();
    });


    fbuttons[1].addEventListener("click", function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.correct++;
        CorFal.innerHTML = "Correct";
        console.log(score);
    });

        //add score to local storage change button style to permanent color onclick
    fbuttons[0].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
    }
        ); 
        //add score to local storage subtract time
    

    fbuttons[2].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

    fbuttons[3].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });
};

function question8() {
    question.innerHTML = "how do you convert an object into a string";
    choicetextA.nodeValue = "JSON.stringify(object)";
    choicetextB.nodeValue = "object.string";
    choicetextC.nodeValue = "object.trim";
    choicetextD.textContent = "stringify(object)";
    CorFal.innerHTML = "";

    next.addEventListener('click', function(ev){
        ev.stopPropagation();
        ev.preventDefault();
        question7();
    });


    fbuttons[0].addEventListener("click", function(event){
        event.preventDefault();
        CorFal.innerHTML = "Correct";
        event.stopImmediatePropagation();
        score.correct++;
        console.log(score);
    });

        //add score to local storage change button style to permanent color onclick
    fbuttons[1].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
    }
        ); 
        //add score to local storage subtract time
    

    fbuttons[2].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

    fbuttons[3].addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        score.wrong++;
        CorFal.innerHTML = "False";
        //add score to local storage subtract time
    });

    }
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