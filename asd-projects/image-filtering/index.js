// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
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
  
  applyFilter(reddify);
  applyFilterNoBackground(increaseGreenByBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(decreaseBlue);
  applyFilterNoBackground(reddify);

 // applyFilter(grayscale); // testing my grayscale function
 // applyFilter(purpleTint); // testing my purple tint function
 //  applyFilter(vintage); // testing my vintage function
 //  applyFilter(inversion); // testing my invert function
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
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (var row = 0; row < image.length; row++){
    for (var column = 0; column < image[row].length; column++){
      if (image[row][column] !== backgroundColor){
        var array = rgbStringToArray(image[row][column]);
        filterFunction(array);
        var string = rgbArrayToString(array);
        image[row][column] = string;  
      } 
    }
  }
}

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
function decreaseBlue(array){
  //testing: console.log("Blue before: " + arr[BLUE]);
  array[BLUE] -= 50;
  newBlue = keepInBounds(array[BLUE]);
  // testing: console.log("Blue after: " + newBlue); 
  array[BLUE] = newBlue;
}

function increaseGreenByBlue(array){
  array[GREEN] += array[BLUE];
  newGreen = keepInBounds(array[GREEN]);
  array[GREEN] = newGreen;
}

function grayscale(array){
  var sum = array[RED] + array[GREEN] + array[BLUE];
  var avg = sum / 3
  array[RED] = avg;
  array[GREEN] = avg;
  array[BLUE] = avg;
}

function purpleTint(array){
  array[RED] += 150;
  array[BLUE] += 150;
  newRed = keepInBounds(array[RED]);
  newBlue = keepInBounds(array[BLUE]);
  array[RED] = newRed;
  array[BLUE] = newBlue;
}

function vintage(array){
  array[RED] += 50;
  array[GREEN] += 50;
  array[BLUE] -= 200;
  newRed = keepInBounds(array[RED]);
  newGreen = keepInBounds(array[GREEN]);
  newBlue = keepInBounds(array[BLUE]);
  array[RED] = newRed;
  array[GREEN] = newGreen;
  array[BLUE] = newBlue;
}

function inversion(array){
  array[RED] = 255 - array[RED];
  array[BLUE] = 255 - array[BLUE];
  array[GREEN] = 255 - array[GREEN];
  newRed = keepInBounds(array[RED]);
  newGreen = keepInBounds(array[GREEN]);
  newBlue = keepInBounds(array[BLUE]);
  array[RED] = newRed;
  array[GREEN] = newGreen;
  array[BLUE] = newBlue;
}

// try after finishing sorting
/*
function smudge(array){
  for (var row = 0; row < image.length; row++){
    for (var column = 0; column < image[row].length; column++){
      var pixel = image[row][column]; 
      var pixelArray = rgbStringToArray(pixel); 
    //  console.log(pixelArray);
      var nextPixel = image[row+1][column];
      var nextPixelArray = rgbStringToArray(nextPixel);
   //   console.log(nextPixelArray);
    }
    for (var i = 0; i <= pixelArray.length; i++){
        console.log("Pixel array: " + pixelArray[i]);
    //    console.log(nextPixelArray[i]);
      }
    //  console.log("new mix: " + pixelArray);

     // var newMix = image[row][column] + image[row][column-1];
     // image[row][column] = newMix;
  }
}
*/
// CHALLENGE code goes below here
