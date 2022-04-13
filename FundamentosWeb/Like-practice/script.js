var addlikes = [9, 12, 9];
var p = [
    document.querySelector("#likecount1"),
    document.querySelector("#likecount2"),
    document.querySelector("#likecount3")
];

function addlike(id){
    addlikes[id]++;
    p[id].innerHTML = addlikes[id] + "likes";
}