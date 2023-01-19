
 var displayscore = window.localStorage.getItem("score");
 var username = window.localStorage.getItem('username');
 var userscore = "" + username + ": " + displayscore;
 var setuserscore = document.getElementById('wins');
 var addscore = document.createElement('li');
 var addition = addscore.innerHTML = "High Scores:\n "+ "\n " + userscore;
 setuserscore.appendChild(addscore);
 localStorage.setItem('addition', addition);

var retest = document.getElementById('reset');
retest.addEventListener('click', function(){
    window.open('./index.html');
});


