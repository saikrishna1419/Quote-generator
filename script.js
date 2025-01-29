const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const xButton = document.getElementById('X');
const newQuotebtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


// let apiQuotes = [];

// showing loading
function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}


// Hide loading
function removingLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show new quote
function newQuote() {
    showLoadingSpinner();
    //pick a random quote from apiQuotes Array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
    //check if author field is empty and replace with unknown
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }

    //check Quote length to determine styling
    if(quote.text.length>50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    removingLoadingSpinner();
}



function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuotebtn.addEventListener('click', newQuote)
xButton.addEventListener('click', tweetQuote)

newQuote();


//Get Quotes From API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
        
//         newQuote();

//     }catch(error){
//         //Catch Error Here
//     }
// }

//On load
// getQuotes();

