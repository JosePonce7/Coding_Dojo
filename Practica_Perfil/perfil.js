function changeName(element) {
    document.querySelector('.profile-name').innerText="Maria Perez";   
}

var connections = document.querySelector('#connections');
var requests = document.querySelector ('#requests');

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    connections.innerText++;
    requests.innerText--;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requests.innerText--;
}