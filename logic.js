// make an array
// need objects
// event listener to start quiz and buttons
// the event.listener will tell you if the selection is right and the same for the wrong answer
// has to reveal answer and keep score, but it needs to go away for the next questio
// 
// 
// 
// 
var button = document.querySelector("#button")



function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }