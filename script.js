let apiQuote = [];

//Get Quotes From API
async function getQuote(){
    const apiUrl = "https://api.quotable.io/random";
    try{
        const response = await fetch(apiUrl);

        // Check if the response is okay (status 200)
        if (!response.ok) {
            throw new Error();
        }

        apiQuote = await response.json();
        console.log(apiQuote);
    }catch(error){
        apiQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        console.log(apiQuote);
    }
}

//On Load
getQuote();