
 var displayscore = window.localStorage.getItem("score");
 var username = window.localStorage.getItem('username');
 var userscore = "" + username + ": " + displayscore;
 var setuserscore = document.getElementById('wins');
 
 var scores = [];
 var pushscorein = scores.push(userscore);

 for (let i = 0; i < scores.length; i++) {
    var addscore = document.createElement('li');
    var addition = addscore.innerHTML(scores[i]);
    var newscoreadd = setuserscore.appendChild(addscore);
    
 }

 
 localStorage.setItem('addition', addition);
addscore.setAttribute("style", "margin-left: 10%")
var retest = document.getElementById('reset');
retest.addEventListener('click', function(){
    window.open('./index.html');
    window.open('','_self').close();
});

