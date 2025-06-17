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
  // Game Item Objects
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
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
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
   // console.log("key pressed: " + event.keyCode); TODO 1
   if (event.which === KEY.LEFT){
  //  console.log("left pressed");
    walker.speedX = -5;
   } else if (event.which === KEY.UP){
  //  console.log("up pressed");
    walker.speedY = -5;
   } else if (event.which === KEY.RIGHT){
  //  console.log("right pressed");
    walker.speedX = 5;
   } else if (event.which === KEY.DOWN){
  //  console.log("down pressed");
    walker.speedY = 5;
   }
  }

  function handleKeyUp(event){
    walker.speedX = 0;
    walker.speedY = 0;
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

  function redrawGameItem(){
    $("#walker").css("left", walker.positionX); // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("top", walker.positionY); // draw the box in the new location, positionX pixels away from the "left"
  }

  function wallCollision(){
    if (walker.positionX > $("#board").width()-50){ // right wall
      walker.positionX -= walker.speedX
    } else if (walker.positionY > $("#board").height()-50){ // bottom
      walker.positionY -= walker.speedY
    } else if (walker.positionX < 0){ // left wall
      walker.positionX -= walker.speedX
    } else if (walker.positionY < 0){
      walker.positionY -= walker.speedY // top wall
    }
  }
  
}
