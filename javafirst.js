var username = document.getElementById('nameinput').value;
var begin = document.getElementById('submit');
function starttest(ev) {
    ev.preventDefault();
    localStorage.setItem('username', username);
    console.log(username);
    window.open('./index1.html');
};
begin.addEventListener('click', starttest);