let displayscore = localStorage.getItem("score");
let display = document.getElementById('wins');

console.log(displayscore);

display.innerHTML = displayscore;
