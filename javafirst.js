var username = document.getElementById('nameinput');
var begin = document.getElementById('submit');
function starttest() {
    var name = username.innerHTML;
    localStorage.setItem('username', name);
    window.open('./index.html');
};