
 var displayscore = window.localStorage.getItem("score");
 var username = window.localStorage.getItem('username');
 var userscore = "" + username + ": " + displayscore;
 var setuserscore = document.getElementById('wins');
 var addscore = document.createElement('li');
 var addition = addscore.innerHTML = "High Scores:\n "+ " " + userscore;
 setuserscore.appendChild(addscore);
 localStorage.setItem('addition', addition);




