(function(){
  "use strict";

//this is telling javascript where in the HTML the elements are and where to plug the information back in
var clock = document.getElementById('clock');
var background = document.querySelector('.container');
var hoursHTMLElement = document.querySelector('.hours');
var minutesHTMLElement = document.querySelector('.minutes');
var secondsHTMLElement = document.querySelector('.seconds');
var isHovering = false;
var progressBar = document.getElementById('progress');



function updateClock(){
  //this is telling the function where to pull the information for the date
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();


  var hexStringHours = ('0' + currentHours.toString(16)).slice(-2);
  var hexStringMinutes = ('0' + currentMinutes.toString(16)).slice(-2);
  var hexStringSeconds = ('0' + currentSeconds.toString(16)).slice(-2);
  var updateColors = '#' + hexStringHours + hexStringMinutes + hexStringSeconds;
  background.style.backgroundColor = updateColors;
  background.style.borderColor = '#' + hexStringSeconds + 1;
  hoursHTMLElement.style.color = '#' + hexStringHours + 'A';
  minutesHTMLElement.style.color = '#' + hexStringMinutes + 'B';
  secondsHTMLElement.style.color = '#' + hexStringSeconds + '1';

  if (isHovering){
    hoursHTMLElement.textContent = hexStringHours;
    minutesHTMLElement.textContent = hexStringMinutes;
    secondsHTMLElement.textContent = hexStringSeconds;

  }else {
  hoursHTMLElement.textContent = ('0' + currentHours).slice(-2);
  minutesHTMLElement.textContent = ('0' + currentMinutes).slice(-2);
  secondsHTMLElement.textContent = ('0' + currentSeconds).slice(-2);
  }
  progressBar.style.width = (currentSeconds / 60 * 100) + '%';
  progressBar.style.backgroundColor = '#' + hexStringSeconds + '1';
}


function mouseOverHandler (){
  isHovering = true;
}

function mouseOffHandler (){
  isHovering = false;
}

window.setInterval(updateClock, 100);

clock.addEventListener('mouseover', mouseOverHandler);
clock.addEventListener('mouseout', mouseOffHandler);

}());
