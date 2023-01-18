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

var abcd = document.querySelector(".ABCD");

var timer = document.getElementById('timeleft');

var choicetextA = choiceA.childNodes[2];

var choicetextB = choiceB.childNodes[2];
var choicetextC = choiceC.childNodes[2];
var choicetextD = choiceD.childNodes[2];

var score = {
    correct: 0,
    wrong: 0,
};

var clicked = false;

console.log(score);


function test() {

    var minutes = 4;
    var seconds = 60;


    let increment = function() {
        score.correct++;
    };

    let decrement = function() {
        score.wrong++;
    };

    let correct = function(ev) {
        ev.stopImmediatePropagation();
        CorFal.innerHTML = "Correct";
        increment();
        console.log(score);
        clicked = true;
        };

    function minustime () {
        if (seconds >= 30) {
            seconds = seconds-30;
        } else if (seconds < 30) {
            Tvalue1 = 30 - seconds;
            seconds = 60 - Tvalue1;
            minutes--;
        }
    }
    let wrong = function(ev) {
        ev.stopImmediatePropagation();
        CorFal.innerHTML = "False";
        decrement();
        minustime();
        window.alert('30 Seconds Lost!');
        console.log(score);
        clicked = true;
        };

    function specify(randanswer) {
        randanswer.addEventListener('click', correct, {once:true})
        console.log(score);
        localStorage.setItem("score", score.correct);
        abcd.addEventListener('click', wrong, {once:true})
        }
    

    function rectify(randanswer) {
        randanswer.removeEventListener('click', correct, {once:true});
        randanswer.removeEventListener('click', wrong, {once:true});
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener('click', wrong, {once:true});
            buttons[i].removeEventListener('click',correct, {once:true});
            buttons[0].removeEventListener('click', correct, {once:true});
            buttons[0].removeEventListener('click', wrong, {once:true});
            abcd.removeEventListener('click', wrong, {once:true});
        }
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
            if (minutes <= -1) {
                clearInterval(timeinterval);
                scorepage();
            }
        }, 1000);
    };

    function scorepage() {
        window.open('./indexlast.html');
    };

    countdown();

    function question1() {

        question.innerHTML = "What does JQuery do?";
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


        function generate() {
        for (let i = 1; i < buttons.length; i++) {
            var element = buttons[i];
            Math.floor(Math.random()* fbuttons.length) 
            element.childNodes[2].nodeValue = answers1string[i];
            randominput.nodeValue = answers1string[0];
            if(randominput.textContent !== buttons[0].childNodes[2].textContent ) {
               buttons[0].childNodes[2].nodeValue = answers1string[comchoice];
            
             //buttons[0].addEventListener('click',wrong,{once: true});}
            //if(randominput.nodeValue !== element.childNodes[2].nodeValue ) {
             //  element.addEventListener('click', wrong, {once: true});
            }}
        

            
        };
        
            generate();
            specify(randomselection);


            next.addEventListener('click', function(ev){
                ev.preventDefault();
                rectify(randomselection);
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
                if(randominput2.textContent !== buttons[0].childNodes[2].textContent ) {
                    buttons[0].childNodes[2].nodeValue = answers2string[comchoice2];
                   // buttons[0].addEventListener('click',wrong,{once: true});
                };
              //  buttons[0].addEventListener('click',wrong,{once: true});
               // if(randominput2.nodeValue !== element.childNodes[2].nodeValue ) {
                //    element.addEventListener('click', wrong, {once: true});
              //  }
            }
        
                        
                    
                specify(randomselection2);
                

    


        previous.addEventListener("click", function(event){
            event.preventDefault();
            question1();
        });
        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            rectify(randomselection2);
            question3();
        });
    }



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
                if(randominput3.textContent !== buttons[0].childNodes[2].textContent ) {
                   buttons[0].childNodes[2].nodeValue = answers3string[comchoice3];
                //   buttons[0].addEventListener('click',wrong,{once: true});
                }
              //  buttons[0].addEventListener('click',wrong,{once: true});
            }
        
                specify(randomselection3);

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            rectify(randomselection3);
            question4();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            
            question2();
        });

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
                if(randominput4.textContent !== buttons[0].childNodes[2].textContent ) {
                    buttons[0].childNodes[2].nodeValue = answers4string[comchoice4];
                    buttons[0].addEventListener('click',wrong,{once: true});
                };
              //  if(randominput4.nodeValue !== element.childNodes[2].nodeValue ) {
                //    element.addEventListener('click', wrong, {once: true});
                //}
              //  buttons[0].addEventListener('click',wrong,{once: true});
            }
                specify(randomselection4);
                
        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            rectify(randomselection4);
            question5();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            question3();
        });


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
                if(randominput5.textContent !== buttons[0].childNodes[2].textContent ) {
                    buttons[0].childNodes[2].nodeValue = answers5string[comchoice5];
                   // buttons[0].addEventListener('click', wrong, {once: true});
                };
               // buttons[0].addEventListener('click',wrong,{once: true});
               // if(randominput5.nodeValue !== element.childNodes[2].nodeValue ) {
                 //   element.addEventListener('click', wrong, {once: true});
                //}
            }
                specify(randomselection5);
            
        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            rectify(randomselection5);
            question6();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            question4();
        });

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
            var newzero = buttons[0].childNodes[2].textContent;
            console.log(newzero);
            console.log(randominput6.textContent);
            randominput6.nodeValue = answers6string[0];
            if(randominput6.textContent !== buttons[0].childNodes[2].textContent ) {
                buttons[0].childNodes[2].nodeValue = answers6string[comchoice6];
              //  buttons[0].addEventListener('click', wrong, {once: true});
            };
            //buttons[0].addEventListener('click',wrong,{once: true});
        }
    
            specify(randomselection6);

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            rectify(randomselection6);
            question7();
        });

        previous.addEventListener("click", function(event){
            event.preventDefault();
            question5();
        });


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
            if(randominput7.textContent !== buttons[0].childNodes[2].textContent ) {
                buttons[0].childNodes[2].nodeValue = answers7string[comchoice7];
               // buttons[0].addEventListener('click', wrong, {once: true});
            };
            //buttons[0].addEventListener('click',wrong,{once: true});
        }
            specify(randomselection7);

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            rectify(randomselection7);
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
            if(randominput8.textContent !== buttons[0].childNodes[2].textContent) {
                buttons[0].childNodes[2].nodeValue = answers8string[comchoice8];
               // buttons[0].addEventListener('click', wrong, {once: true});
            };
           // buttons[0].addEventListener('click',wrong,{once: true});
        }
            specify(randomselection8);
        previous.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            question7();
        });

        next.innerHTML = "Submit";

        next.addEventListener('click', function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            rectify(randomselection8);
            window.open('indexlast.html');
        });

    }

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
test();


