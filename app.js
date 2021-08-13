console.log('Javascript for adding a minutor to my website')
let countDown = new Date("September 8, 2021 16:00:00").getTime()

var timerTime = setInterval(function(){

let now = new Date().getTime()


let timeleft = countDown - now;



var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.querySelector('.days').innerHTML = days +' d';
document.querySelector('.hours').innerHTML = hours +' h';
document.querySelector('.minutes').innerHTML = minutes +' m';
document.querySelector('.seconds').innerHTML = seconds +' s';


if(timeleft < 0){
    
    clearInterval(timerTime)
document.querySelector('.days').innerHTML = "";
document.querySelector('.hours').innerHTML = "";
document.querySelector('.minutes').innerHTML = "";
document.querySelector('.seconds').innerHTML = "";
document.querySelector('.end').innerHTML = "TIME UP";
}


}, 1000)
