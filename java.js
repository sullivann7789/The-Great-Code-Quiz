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

var abcd = document.querySelectorAll("#ABCD");

var timer = document.getElementById('timeleft');

var choicetextA = choiceA.childNodes[2];

var choicetextB = choiceB.childNodes[2];
var choicetextC = choiceC.childNodes[2];
var choicetextD = choiceD.childNodes[2];

var score = {
    correct: 0,
    wrong: 0,
};

console.log(score);


function test() {

    var minutes = 4;
    var seconds = 60;


    function increment(){
        score.correct++;
    };

    function decrement(){
        score.wrong++;
    };

    function correct(ev){
        ev.preventDefault();
        ev.stopPropagation();
        CorFal.innerHTML = "Correct";
        increment();
        console.log(score);
    }

    function wrong(ev){
        ev.preventDefault();
        ev.stopPropagation();
        CorFal.innerHTML = "False";
        decrement();
        console.log(score);
    }

    function countdown(){


        var timeinterval = setInterval(function() {
            seconds--;
            timer.textContent = minutes + ':' + seconds + ' Time Left';
            
            if (seconds < 10) {
                timer.textContent = minutes + ':0' + seconds + ' Time Left';
            };
            if (seconds == 0) {
                timer.textContent = minutes + ':0' + seconds + ' Time Left';
                minutes--;
                seconds = 60;
                if (minutes == -1) {
                clearInterval(timeinterval);
                scorepage();
            }
        }
        }, 1000);
    };

    function scorepage() {
        window.open('./indexlast.html');
    };

    countdown();

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

        var answers1string = Object.values(answers1);

        var comchoice = Math.floor(Math.random()* buttons.length);
        var randomselection = buttons[comchoice];
        var randominput = randomselection.childNodes[2];



        for (let i = 1; i < buttons.length; i++) {
            var element = buttons[i];
            Math.floor(Math.random()* fbuttons.length) 
            element.childNodes[2].nodeValue = answers1string[i];
            randominput.nodeValue = answers1string[0];
            if(randominput.nodeValue != buttons[0].childNodes[2].nodeValue ) {
                buttons[0].childNodes[2].nodeValue = answers1string[comchoice];
            };
            specify();
            if (fbuttons[comchoice].addEventListener('click', correct)){
                    score.wrong--;
                    console.log(score);
                    localStorage.setItem("score", score);
            }
            
            
            function specify() {
                for (let i = 0; i < fbuttons.length; i++) {
                    const element = fbuttons[i];
                    element.addEventListener('click', wrong)
                    
                    };
                    
                };
            }


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
            }); */

            next.addEventListener('click', function(ev){
                ev.stopPropagation();
                ev.preventDefault();
                question2();
            });
        }

        question1();
        


    function question2() {

        question.innerHTML = "What does the .nodeValue event handler do?";
        CorFal.innerHTML = "";
        var answers2 = {
            q1a : "Provide the internal value of the element",
            q1b : "Create a new Node",
            q1c : "Provide the value of the parent element",
            q1d : "Generate a random number value",
            };
    
            var answers2string = Object.values(answers2);
            var comchoice2 = Math.floor(Math.random()* buttons.length);
            var randomselection2 = buttons[comchoice2];
            var randominput2 = randomselection2.childNodes[2];
    
            for (let i = 1; i < buttons.length; i++) {
                var element = buttons[i];
                Math.floor(Math.random()* fbuttons.length) 
                element.childNodes[2].nodeValue = answers2string[i];
                randominput2.nodeValue = answers2string[0];
                if(randominput2.nodeValue != buttons[0].childNodes[2].nodeValue ) {
                    buttons[0].childNodes[2].nodeValue = answers2string[comchoice2];
                };
                specify();
                if (fbuttons[comchoice2].addEventListener('click', correct)){
                        score.wrong--;
                        console.log(score);
                        localStorage.setItem("score", score);
                }
                
                function specify() {
                    for (let i = 0; i < fbuttons.length; i++) {
                        const element = fbuttons[i];
                        element.addEventListener('click', wrong)
                        
                        };
                        
                    };
                }
    


        previous.addEventListener("click", function(event){
            event.preventDefault();
            question1();
        });

       /*  fbuttons[2].addEventListener("click", function(event){
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
        });*/

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            question3();
        });

        };

    function question3() {

        question.innerHTML = "What is the purpose of event handler .addEventListener('keydown',function())?";
        CorFal.innerHTML = "";

        var answers3 = {
            q1a : "Provides an event when a key is being pressed on ",
            q1b : "Lists the musical key of your favorite rap song",
            q1c : "Provides an event after a key has been pressed on",
            q1d : "Provides which key is being pressed on",
            };
    
            var answers3string = Object.values(answers3);

            var comchoice3 = Math.floor(Math.random()* buttons.length);
            console.log(buttons[comchoice3]);
            var randomselection3 = buttons[comchoice3];
            var randominput3 = randomselection3.childNodes[2];
    
    
            for (let i = 1; i < buttons.length; i++) {
                var element = buttons[i];
                Math.floor(Math.random()* fbuttons.length) 
                element.childNodes[2].nodeValue = answers3string[i];
                randominput3.nodeValue = answers3string[0];
                if(randominput3.nodeValue != buttons[0].childNodes[2].nodeValue ) {
                    buttons[0].childNodes[2].nodeValue = answers3string[comchoice3];
                };
                specify();
                if (fbuttons[comchoice3].addEventListener('click', correct)){
                        score.wrong--;
                        console.log(score);
                        localStorage.setItem("score", score);
                }
                
                function specify() {
                    for (let i = 0; i < fbuttons.length; i++) {
                        const element = fbuttons[i];
                        element.addEventListener('click', wrong)
                        
                        };
                        
                    };
                }

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            question4();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            question2();
        });


        /*fbuttons[3].addEventListener("click", function(event){
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
        });*/

    };

    function question4() {
        question.innerHTML = "What HTML element do you use if you want to create a clickable link?";
        CorFal.innerHTML = "";
        var answers4 = {
            q1a : "<a href=''>",
            q1b : "<href=''>",
            q1c : "<src>",
            q1d : "<script>"
            };
    
            var answers4string = Object.values(answers4);
            var comchoice4 = Math.floor(Math.random()* buttons.length);
            var randomselection4 = buttons[comchoice4];
            var randominput4 = randomselection4.childNodes[2];
    
            for (let i = 1; i < buttons.length; i++) {
                var element = buttons[i];
                Math.floor(Math.random()* fbuttons.length) 
                element.childNodes[2].nodeValue = answers4string[i];
                randominput4.nodeValue = answers4string[0];
                if(randominput4.nodeValue != buttons[0].childNodes[2].nodeValue ) {
                    buttons[0].childNodes[2].nodeValue = answers4string[comchoice4];
                };
                specify();
                if (fbuttons[comchoice4].addEventListener('click', correct)){
                        score.wrong--;
                        console.log(score);
                        localStorage.setItem("score", score);
                }
                
                
                function specify() {
                    for (let i = 0; i < fbuttons.length; i++) {
                        const element = fbuttons[i];
                        element.addEventListener('click', wrong)
                        
                        };
                        
                    };
                }
        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            question5();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            question3();
        });


        /*fbuttons[2].addEventListener("click", function(event){
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
        });*/

    };

    function question5() {
        question.innerHTML = "How do you add an element, or code structure (such as text), to another HTML element using JS?";
        CorFal.innerHTML = "";
        var answers5 = {
            q1a : ".append or .appendChild",
            q1b : ".add",
            q1c : ".createElement",
            q1d : ".textContent"
            };
    
            var answers5string = Object.values(answers5);

            var comchoice5 = Math.floor(Math.random()* buttons.length);
            var randomselection5 = buttons[comchoice5];
            var randominput5 = randomselection5.childNodes[2];
    
    
            for (let i = 1; i < buttons.length; i++) {
                var element = buttons[i];
                Math.floor(Math.random()* fbuttons.length) 
                element.childNodes[2].nodeValue = answers5string[i];
                randominput5.nodeValue = answers5string[0];
                if(randominput5.nodeValue != buttons[0].childNodes[2].nodeValue ) {
                    buttons[0].childNodes[2].nodeValue = answers5string[comchoice5];
                };
                specify();
                if (fbuttons[comchoice5].addEventListener('click', correct)){
                        score.wrong--;
                        console.log(score);
                        localStorage.setItem("score", score);
                }
                
                
                function specify() {
                    for (let i = 0; i < fbuttons.length; i++) {
                        const element = fbuttons[i];
                        element.addEventListener('click', wrong)
                        
                        };
                        
                    };
                }

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            question6();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            question4();
        });


        /*fbuttons[1].addEventListener("click", function(event){
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
        });*/

    };

    function question6() {
        question.innerHTML = "How do you convert text into a JavaScript object using JavaScript?";
        CorFal.innerHTML = "";

        var answers6 = {
            q1a : "JSON.parse()",
            q1b : "document.getElementByID",
            q1c : "item.innerHTML = ",
            q1d : "var x = 'text'; ",
            };
    
        var answers6string = Object.values(answers6);
        var comchoice6 = Math.floor(Math.random()* buttons.length);
        var randomselection6 = buttons[comchoice6];
        var randominput6 = randomselection6.childNodes[2];



        for (let i = 1; i < buttons.length; i++) {
            var element = buttons[i];
            Math.floor(Math.random()* fbuttons.length) 
            element.childNodes[2].nodeValue = answers6string[i];
            randominput6.nodeValue = answers6string[0];
            if(randominput6.nodeValue != buttons[0].childNodes[2].nodeValue ) {
                buttons[0].childNodes[2].nodeValue = answers6string[comchoice6];
            };
            specify();
            if (fbuttons[comchoice6].addEventListener('click', correct)){
                    score.wrong--;
                    console.log(score);
                    localStorage.setItem("score", score);
            }
            
            
            function specify() {
                for (let i = 0; i < fbuttons.length; i++) {
                    const element = fbuttons[i];
                    element.addEventListener('click', wrong)
                    
                    };
                    
                };
            }

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            question7();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            question5();
        });


       /* fbuttons[3].addEventListener("click", function(event){
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
        }); */

    };

    function question7() {
        question.innerHTML = "How do you store an object in storage?";
        CorFal.innerHTML = "";

        var answers7 = {
            q1a : "localStorage.setItem()",
            q1b : "console.log(object)",
            q1c : "localStorage.log()",
            q1d : "localStorage.console.log(object)",
            };
        var answers7string = Object.values(answers7);
        var comchoice7 = Math.floor(Math.random()* buttons.length);
        var randomselection7 = buttons[comchoice7];
        var randominput7 = randomselection7.childNodes[2];



        for (let i = 1; i < buttons.length; i++) {
            var element = buttons[i];
            Math.floor(Math.random()* fbuttons.length) 
            element.childNodes[2].nodeValue = answers7string[i];
            randominput7.nodeValue = answers7string[0];
            if(randominput7.nodeValue != buttons[0].childNodes[2].nodeValue ) {
                buttons[0].childNodes[2].nodeValue = answers7string[comchoice7];
            };
            specify();
            if (fbuttons[comchoice7].addEventListener('click', correct)){
                    score.wrong--;
                    console.log(score);
                    localStorage.setItem("score", score);
            }
            
            
            function specify() {
                for (let i = 0; i < fbuttons.length; i++) {
                    const element = fbuttons[i];
                    element.addEventListener('click', wrong)
                    
                    };
                    
                };
            }

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            question8();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            question6();
        });

    };

    function question8() {
        question.innerHTML = "how do you convert an object into a string";
        CorFal.innerHTML = "";

        var answers8 = {
            q1a : "JSON.stringify(object)",
            q1b : "object.string",
            q1c : "object.trim",
            q1d : "stringify(object)",
            };

        var answers8string = Object.values(answers8);

        var comchoice8 = Math.floor(Math.random()* buttons.length);
        var randomselection8 = buttons[comchoice8];
        var randominput8 = randomselection8.childNodes[2];



        for (let i = 1; i < buttons.length; i++) {
            var element = buttons[i];
            Math.floor(Math.random()* fbuttons.length) 
            element.childNodes[2].nodeValue = answers8string[i];
            randominput8.nodeValue = answers8string[0];
            if(randominput8.nodeValue != buttons[0].childNodes[2].nodeValue ) {
                buttons[0].childNodes[2].nodeValue = answers8string[comchoice8];
            };
            specify();
            if (fbuttons[comchoice8].addEventListener('click', correct)){
                    score.wrong--;
                    console.log(score);
                    localStorage.setItem("score", score);
            }
            
            
            function specify() {
                for (let i = 0; i < fbuttons.length; i++) {
                    const element = fbuttons[i];
                    element.addEventListener('click', wrong)
                    
                    };
                    
                };
            }

        previous.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            question7();
        });

        next.innerHTML = "Submit";

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            window.open('indexlast.html');
        });

        }
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
test();