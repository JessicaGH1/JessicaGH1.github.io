/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var walker = {
    positionX: 0,
    speedX: 0,
    positionY: 0,
    speedY: 0
  }

  var walker2 = {
    positionX2: 500,
    speedX2: 0,
    positionY2: 500,
    speedY2: 0
  }

  // Game Item Objects for 1st and 2nd box
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  }

  var KEY2 = {
    A: 65,
    W: 87,
    D: 68,
    S: 83
  }
  
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  // if boxes clicked on, they turn the same color
  var randomColor = "#000000".replace(/0/g, function () {
  return (~~(Math.random() * 16)).toString(16); 
  });

  $('#walker').on('click', changeColor);
  $('#walker2').on('click', changeColorAgain);

  function changeColor(){
    $('#walker').css('background-color', randomColor);
  }

  function changeColorAgain(){
    $('#walker2').css('background-color', randomColor);
  }

  // the game 
  function newFrame() {
    repositionGameItem();
    repositionGameItem2();
    wallCollision();
    wallCollision2()
    playersCollide();
    redrawGameItem();
    redrawGameItem2();
  }

  

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
   if (event.which === KEY.LEFT){
    walker.speedX = -5;
   } else if (event.which === KEY.UP){
    walker.speedY = -5;
   } else if (event.which === KEY.RIGHT){
    walker.speedX = 5;
   } else if (event.which === KEY.DOWN){
    walker.speedY = 5;
   } else if (event.which === KEY2.A){
    walker2.speedX2 = -5;
   } else if (event.which === KEY2.W){
    walker2.speedY2 = -5;
   } else if (event.which === KEY2.D){
    walker2.speedX2 = 5;
   } else if (event.which === KEY2.S){
    walker2.speedY2 = 5;
   }
  }
  
  // function that stops box when user no longer pressing down on keys
  function handleKeyUp(event){
    walker.speedX = 0;
    walker.speedY = 0;
    walker2.speedX2 = 0;
    walker2.speedY2 = 0;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  
  function repositionGameItem(){
    walker.positionX += walker.speedX; // update the position of the box along the x-axis
    walker.positionY += walker.speedY; // update the position of the box along the x-axis
  }

  
  function repositionGameItem2(){
    walker2.positionX2 += walker2.speedX2; // update the position of the 1st box along the x-axis
    walker2.positionY2 += walker2.speedY2; // update the position of the 2nd box along the x-axis
  }


  function redrawGameItem(){
    $("#walker").css("left", walker.positionX); // draw the 1st box in the new location, positionX pixels away from the "left"
    $("#walker").css("top", walker.positionY); // draw the 1st box in the new location, positionY pixels away from the "top"
  }


  function redrawGameItem2(){
    $("#walker2").css("left", walker2.positionX2); // draw the 2nd box in the new location, positionX2 pixels away from the "left"
    $("#walker2").css("top", walker2.positionY2); // draw the 2nd box in the new location, positionY2 pixels away from the "top"
  }

  function wallCollision(){
    if (walker.positionX > $("#board").width()-100){ // right wall
      walker.positionX -= walker.speedX
    } else if (walker.positionY > $("#board").height()-100){ // bottom wall
      walker.positionY -= walker.speedY
    } else if (walker.positionX < 0){ // left wall
      walker.positionX -= walker.speedX
    } else if (walker.positionY < 0){
      walker.positionY -= walker.speedY // top wall
    }
  }

  function wallCollision2(){
    if (walker2.positionX2 > $("#board").width()-100){ // right wall
      walker2.positionX2 -= walker2.speedX2
    } else if (walker2.positionY2 > $("#board").height()-100){ // bottom wall
      walker2.positionY2 -= walker2.speedY2
    } else if (walker2.positionX2 < 0){ // left wall
      walker2.positionX2 -= walker2.speedX2
    } else if (walker2.positionY2 < 0){
      walker2.positionY2 -= walker2.speedY2 // top wall
    }
  }

  // checks if 1st and 2nd box are in the same position
  // 1st box is 'it' so that box turns dark red
  function playersCollide(){
    if (walker.positionX === walker2.positionX2 && walker.positionY === walker2.positionY2){
      $('#walker').css('background-color', 'darkred');
      walker.positionX = 0;
      walker.positionY = 0;
      walker2.positionX2 = 500;
      walker2.positionX2 = 500;
    }
  }
  
  
}
