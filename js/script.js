/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * 
 * An array of objects, each with a quote, a source, and a tag
 * Objects may include a citation
 * Objects may include a year
***/

const quotes = [ 
  {
    quote: 'There will always be people beyond our reach that we can\'t protect.\
      Which is why we have to save people we can reach.',
    source: ' Izuku Midoriya (“Deku”) ',
    citation: ' My Hero Academia ',
    tag: 'Animation'
  }, 
  {
    quote: 'If you don\’t like your destiny, don\’t accept it.\
      Instead have the courage to change it the way you want it to be.',
    source: ' Naruto Uzumaki ',
    citation: ' Naruto ',
    tag: 'Animation' 
  }, 
  {
    quote: ' If you don\’t take risks, you can’t create a future. ',
    source: ' Luffy D. Monkey ',
    citation: ' One Piece ',
    tag: 'Animation'
  }, 
  {
    quote: ' Anyone can wear the mask. You can wear the mask.\
      If you didn\’t know that before, I hope you do now. ',
    source: ' Miles Morales ',
    citation: ' Spiderman: Into the Spider-Verse ',
    tag: 'Animation',
    year: 2018
  }, 
  {
    quote: ' I never thought that I will be able to do any of this stuff.\
      But, I can. ',
    source: ' Miles Morales ',
    citation: ' Spiderman: Into the Spider-Verse ',
    tag: 'Animation',
    year: 2018
  },
  {
    quote: ' If you truly want to chase after something until the end,\
      you have to put down restraints and everything else in order to pursue it. ',
    source: ' Souma Yukihira ',
    citation: ' Shokugeki no Souma ',
    tag: 'Animation'
  } 
];

/***
 * `getRandomQuote` function
 * 
 * This function return a random quote object from the quotes array.
***/

function getRandomQuote() {
  //Generates a random number between zero and 
  //the last index in the `quotes` array

  const randomNumber = Math.floor(Math.random() * quotes.length);
  
  //Random object from the `quotes` array

  const randomObj = quotes[randomNumber];

  //Return the variable storing the random quote object
  return randomObj;
}

/***
 * `printQuote` function
 * 
 * This function:
 * 1. Calls the getRandomQuote function
 * 2. Uses the returned quote object 
 * to build a string of HTML and quote properties
 * 3. Uses that string to display a random quote in the browser
***/
function printQuote() {

//Calls the random quote object and assigning it to a variable
let randomQuote = getRandomQuote();

//Uses the returned quote object to build a string of HTML and quote properties
let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`

//if citation is present
if (randomQuote.citation) {
  html += `<span class="citation"> ${randomQuote.citation} </span>`
}
//if year is present
if (randomQuote.year) {
  html += `<span class="year"> ${randomQuote.year} </span>`
}
//if tag is present
if (randomQuote.tag) {
  html += `<span class="year"> ${randomQuote.tag} </span>`
}

`</p>`

//Uses html string to display a random quote in the browser
//code adapted from https://teamtreehouse.com/projects/a-random-quote-generator#instructions
return document.getElementById('quote-box').innerHTML = html; 
}

//Calls the printQuote function
printQuote();

/***
 * click event listener for the print quote button
 * code adapted from https://teamtreehouse.com/projects/a-random-quote-generator
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//Changes the quote every 10 seconds
//Adapted from https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(function(){ printQuote() }, 10000);