var video = document.getElementById("myVideo");

video.muted=true;

function over(element){
    element.play(video)   
}

function out(element){
    element.pause(video)
}