// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
 // applyFilter(reddify);
  applyFilter(decreaseBlue);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var row = 0; row < image.length; row++){
    for (var column = 0; column < image[row].length; column++){
      var pixel = image[row][column]; // pixel: rgb(150, 150, 150)
      var pixelArray = rgbStringToArray(pixel); // pixelArray: 150,150,150
      // This is where I’ll modify the color values later
      // pixelArray[RED] = 200;
      filterFunction(pixelArray); 
      var updatedPixel = rgbArrayToString(pixelArray); // Updated pixel before: rgb(150,150,150)
      image[row][column] = updatedPixel; // Image now: rgb(150,150,150)
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function


// TODO 6: Create the keepInBounds function
function keepInBounds(num){
  return num < 0 ? 0 : num > 255 ? 255 : num;
}
// Uncomment to test
/*
console.log(keepInBounds(-20)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(125)); // should print 125
*/

// TODO 4: Create reddify filter function
function reddify(array){
  array[RED] = 200;
}

//Uncomment to test reddify filter function
/*
var testArray = [100, 100, 100];
reddify(testArray);
console.log(testArray); // Should show [200, 100, 100]
*/

// TODO 7 & 8: Create more filter functions
function decreaseBlue(arr){
  //testing: console.log("Blue before: " + arr[BLUE]);
  arr[BLUE] -= 50;
  newBlue = keepInBounds(arr[BLUE]);
  // testing: console.log("Blue after: " + newBlue); 
}

function increaseGreenByBlue(arry){
  arry[GREEN] += arry[BLUE];
  newGreen = keepInBounds(arr[GREEN]);
}

// CHALLENGE code goes below here
