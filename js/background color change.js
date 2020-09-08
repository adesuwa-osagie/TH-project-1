  /*
  Optional function for generating colors: 

  function randomRGB(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
	return color;
  } 
  *NOTE: Above function not used due to personal choice; following function allows random color
  to be selected from a group of colors that represent the sources of the quotes

  */

/***
 * `changeBackground` function
 * 
 * This function selects a random color element from an array.
 * The random color is use to change the background of the page.
 * NOTE: This array contains colors that represent the sources of the quotes.
***/

function changeBackground() {
  //Array of colors

  let colorChoices = ['rgb(58, 193, 98)', 'orange', 'red', 'silver', 'blue']
  
  //Generates a random number between zero and 
  //the last index in the `colorChoices` array
  
  const randomNumber = Math.floor(Math.random() * colorChoices.length);
    
  //Random color from the `colorChoices` array
  
  const randomColor = colorChoices[randomNumber];
  
  //Set background to random color
  document.body.style.background = randomColor;
}

//Adapted from https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
window.addEventListener("click",function() { changeBackground() });

//Changes the background color every 10 seconds
//Adapted from https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(function(){ changeBackground() }, 10000);