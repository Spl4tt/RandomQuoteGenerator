/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [];
quotes.push({
    quote: 'Strength does not come from physical capacity. It comes from an indomitable will.',
    source: 'Mahatma Gandhi'
});
quotes.push({
    quote: 'Part of the journey is the end.',
    source: 'Tony Stark',
    citation: 'Avengers: Endgame',
    year: '2019'
});
quotes.push({
    quote: 'Everything That Has A Beginning Has An End.',
    source: 'The Oracle',
    citation: 'The Matrix: Revolutions',
    year: '2003'
});
quotes.push({
    quote: 'Denial is the most predictable of all human responses.',
    source: 'The Architect',
    citation: 'The Matrix: Reloaded',
    year: '2003'
});
quotes.push({
    quote: 'Look at these poor fuckers. They don\'t even know what\'s about to hit \'em. The hammer of God.',
    source: 'Erlich Bachman',
    citation: 'Silicon Valley',
    year: '2014'
});
quotes.push({
    quote: 'Your vision will become clear only when you look into your heart ... Who looks outside, dreams. Who looks inside, awakens.',
    source: 'Carl Gustav Jung'
});

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
