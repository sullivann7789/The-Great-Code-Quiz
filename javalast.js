
 var displayscore = JSON.parse(window.localStorage.getItem("score"));
 var username = JSON.parse(window.localStorage.getItem('username'));
 var userscore = "" + username + ":" + displayscore;
 var setuserscore = document.getElementById('wins');
setuserscore.innerHTML = "High Scores:\n"+ userscore;





