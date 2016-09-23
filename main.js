(function(){
  "use strict";

//this is telling javascript where in the HTML the elements are and where to plug the information back in

var hoursHTMLElement = document.querySelector('.hours');
var minutesHTMLElement = document.querySelector('.minutes');
var secondsHTMLElement = document.querySelector('.seconds');

//this is declaring the variable that we will call later into our function that updates the time
var currentTime;



function updateClock(){
  //this is telling the function where to pull the information for the date
  currentTime = new Date();
  //
  //this is telling javascript where to get the hours, minutes, and seconds, adding a "0" in front of everything and then only taking the last two numbers
  hoursHTMLElement.textContent = ('0' + currentTime.getHours()).slice(-2);
  minutesHTMLElement.textContent = ('0' + currentTime.getMinutes()).slice(-2);
  secondsHTMLElement.textContent = ('0' + currentTime.getSeconds()).slice(-2);
  //
}
//this is setting the interval at which the clock will update (10 times a second so there is not a second delay before the clock starts) and then displaying the information on the webpage
window.setInterval(updateClock, 100);
//



}());
