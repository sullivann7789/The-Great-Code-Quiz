
 var displayscore = window.localStorage.getItem("score");
 var username = window.localStorage.getItem('username');
 var userscore = "" + username + ":" + displayscore;
 var setuserscore = document.getElementById('wins');
setuserscore.innerHTML = "High Scores:\n"+ userscore;





