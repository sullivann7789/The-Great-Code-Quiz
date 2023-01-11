
var wordList = ["python","java","guitar","venus","coding","matrix","island", "chess","silver", "mobile","proxy","email","server"];
var input =  document.getElementById("inputs");
var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");
var worddisplay = document.getElementById("worddisplay");
console.log(wordList);
var randomword = Math.floor(Math.random() * wordList.length);
var choice = wordList[randomword];
var letter = choice.split('');
console.log(letter[0]);
function wordchoice() {

    worddisplay.innerHTML = choice;
    worddisplay.setAttribute("style", "display: none;");
    guess();
}

function guess() {

    document.addEventListener("keydown", function(event) {


    })
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