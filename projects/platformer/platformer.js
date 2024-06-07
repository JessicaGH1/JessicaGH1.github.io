$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    //my plan is to make a maze inside a cloud and the player has to compleye
    //the maze while collecting collectables and dodging cannons

    // cloud outline
    createPlatform(200,700,1000,20); // bottom
    createPlatform(200,600,-20,100); // up
    createPlatform(200,600,100,-20); // side
    createPlatform(300,500,-20,100);
    createPlatform(300,500,100,-20);
    createPlatform(400,400,-20,100);
    createPlatform(400,400,100,-20);
    createPlatform(500,300,-20,100);
    createPlatform(50,300,450,20); // start
    createPlatform(600,200,200,-20); // top
    createPlatform(800,200,20,100); // down
    createPlatform(800,300,100,-20); // side
    createPlatform(900,300,20,100);
    createPlatform(900,400,100,-20);
    createPlatform(1000,400,20,100);
    createPlatform(1000,500,100,-20);
    createPlatform(1100,500,20,100);
    createPlatform(1100,600,100,-20); // exit

    // maze
    createPlatform(700,200,10,100);
    createPlatform(600,400,100,10);
    createPlatform(600,400,10,100);
    createPlatform(500,500,100,10);
    createPlatform(700,400,10,300);
    createPlatform(400,600,300,10);
    createPlatform(700,500,100,10);
    createPlatform(800,400,100,10);
    createPlatform(1000,500,10,100);
    createPlatform(900,500,10,100);
    createPlatform(800,600,200,10);


    // TODO 2 
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' ('star 'coin') and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    // STAR IS FOR PPL WHO WANT AN EXTRA CHALLENGE!!! IT'S POSSIBLE THO

    createCollectable("coin",425,430,0); 
    createCollectable("star",225,625,0); 
    createCollectable("star",630,430,0); 
    createCollectable("star",725,225,0); 
    createCollectable("coin",825,325,0); 
    createCollectable("coin",825,525,0); 
    createCollectable("star",930,525,0); 
    createCollectable("coin",1030,525,0); 
    createCollectable("trophy",1225,625,0); 


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("top",400,2000,50,50);
    createCannon("top", 1000,3000,50,50);
    createCannon("right",300,6000,50,50);
    createCannon("right",600,3000,50,50);




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
