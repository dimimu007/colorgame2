// var colors = generateRandomColor(6);

// var squares = document.querySelectorAll(".square");
// var pickedColor = pickColor();
// var colorDisplay = document.getElementById("colorDisplay");
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var resetButton = document.querySelector("#reset");

// for (let i = 0; i < squares.length; i++) {
//   squares[i].style.backgroundColor = colors[i];

//   squares[i].addEventListener("click", function () {
//     var clickedColor = this.style.backgroundColor;
//     alert(clickedColor);

//     if (clickedColor === pickedColor) {
//       messageDisplay.textContent = "Correct!";
//       resetButton.textContent = "Play Again?";
//       changeColors(clickedColor);
//       h1.style.background = clickedColor;
//     } else {
//       this.style.background = "#232323";
//       messageDisplay.textContent = "Try Again";
//     }

//     // if (clickedColor === pickedColor) {
//     //   // messageDisplay.textContent = "correct";
//     //   // changeColor();
//     //   alert("right");
//     // }
//   });
// }

// function pickColor() {
//   var random = Math.floor(Math.random() * colors.length);
//   return colors[random];
// }

// // function changeColor() {
// //   squares.backgroundColor = clickedcolor;
// // }

// function generateRandomColor(num) {
//   var array = [];
//   for (let i = 0; i < num; i++) {
//     array.push(randomColor());
//   }
//   return array;
// }

// function randomColor() {
//   // Generate random values for red, green, and blue components
//   var red = Math.floor(Math.random() * 256);
//   var green = Math.floor(Math.random() * 256);
//   var blue = Math.floor(Math.random() * 256);

//   // Construct the RGB color string
//   var rgbColor = "RGB(" + red + ", " + green + ", " + blue + ")";

//   return rgbColor;
// }

// colorDisplay.textContent = pickedColor;

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to arr
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
