
var begin = document.getElementById('submit');
function starttest(ev) {
    var username = document.getElementById('nameinput').value;
    ev.preventDefault();
    localStorage.setItem('username', username);
    console.log(username);
    window.open('./index1.html');
    window.open('','_self').close()
};
begin.addEventListener('click', starttest);