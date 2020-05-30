/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Tag Strings
 */
const moviesTag = 'Movies';
const seriesTag = 'Series';
const humorTag = 'Humor';
const wisdomTag = 'Wisdom';
const marvelComicsTag = 'Marvel Comics';
const sciFiTag = 'SciFi';


/***
 * `quotes` array
***/
const quotes = [];
quotes.push({
    quote: 'Strength does not come from physical capacity. It comes from an indomitable will.',
    source: 'Mahatma Gandhi',
    tags: [wisdomTag]
});
quotes.push({
    quote: 'Your vision will become clear only when you look into your heart ... Who looks outside, dreams. Who looks inside, awakens.',
    source: 'Carl Gustav Jung',
    tags: [wisdomTag]
});
quotes.push({
    quote: 'Part of the journey is the end.',
    source: 'Tony Stark',
    citation: 'Avengers: Endgame',
    year: '2019',
    tags: [moviesTag, marvelComicsTag]
});
quotes.push({
    quote: 'Everything That Has A Beginning Has An End.',
    source: 'The Oracle',
    citation: 'The Matrix: Revolutions',
    year: '2003',
    tags: [moviesTag, sciFiTag]
});
quotes.push({
    quote: 'Denial is the most predictable of all human responses.',
    source: 'The Architect',
    citation: 'The Matrix: Reloaded',
    year: '2003',
    tags: [moviesTag, sciFiTag]
});
quotes.push({
    quote: 'Look at these poor fuckers. They don\'t even know what\'s about to hit \'em. The hammer of God.',
    source: 'Erlich Bachman',
    citation: 'Silicon Valley',
    year: '2014',
    tags: [seriesTag, humorTag]
});

/***
 * `getRandomQuote` function to get one random Quote from the Quotes array
 * @returns The Quote Object
 */
function getRandomQuote() {
    return quotes[getRand()];
}

/***
 * Returns a random number with max == quote count
 * @returns random number
 */
function getRand() {
    return Math.floor(Math.random() * quotes.length);
}

/***
 * `printQuote` function
***/
function printQuote() {
    // Get a Quote object
    let quote = getRandomQuote();
    // Add basic information without closing the paragraph yet
    let htmlOutput = `<p class="quote"> ${quote.quote} </p>
                      <p class="source"> ${quote.source}`;
    //Check for citation property
    if (quote.hasOwnProperty('citation')) {
        htmlOutput += `<span class="citation"> ${quote.citation} </span>`;
    }
    //Check for source property
    if (quote.hasOwnProperty('year')) {
        htmlOutput += `<span class="year"> ${quote.year} </span>`;
    }
    if (quote.hasOwnProperty('tags')) {
        htmlOutput += `<span class="tags"> Tags: ${quote.tags.join(', ')} </span>`;
    }
    // Close the paragraph
    htmlOutput += '</p>';
    // Print out the Quote
    document.getElementById('quote-box').innerHTML = htmlOutput;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
























