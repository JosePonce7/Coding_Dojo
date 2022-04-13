console.log(hello);                                   
var hello = 'world';//console logs undefined
//How interpreter reads:
    //var hello = 'world';
    //console.log(hello);

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
} //console logs magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);f
}
console.log(brendan);
//console logs super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}//console log chicken then half chicken;

mean();
console.log(food);
var mean = function() {//logs that mean is no function
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);