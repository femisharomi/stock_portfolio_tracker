/* av_data.tsx */

// Import any necessary modules or types
import { fetchData } from "@remix-run/react/dist/data";

//Functions to test
export let companyDataObj = {
    logo : "", // assign logo in another 
    symbol : "",
    name : "",
    globalQuote: {
        open : "",
        high : "",
        low : "",
        price : "",
        volume : "",
        previousClose : ""
    },
    overview : {
        assetType : "",
        description : "",
        CIK : "",
        exchange : "",
        currency : "",
        country : "",
        sector : "",
        industry : "",
        address : "",
        divPerShare : ""
    }
}

/*
 * Test 1: Define the object companyData.
*/
export async function getCompanyData(stockSymbol : string)
{
    const urlForStockPrice = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=JFPBYRJXEF9A6DAB";
    const urlForStockOverview = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + stockSymbol + "&apikey=JFPBYRJXEF9A6DAB";

    try 
    {
        // Fetch data from the API for Global Quotes i.e stock price and other financial information. 
        const priceApiRequest = await fetch(urlForStockPrice);
        const returnedPriceData = await priceApiRequest.json();

        //Fetch data from the API for Overview i.e general stock information
        const overviewApiRequest = await fetch(urlForStockOverview);
        const returnedOverviewData = await overviewApiRequest.json();

        // Assigning the retireved values to the companyData object.
        // Stock info
        companyDataObj.symbol = returnedOverviewData["Symbol"];
        companyDataObj.name = returnedOverviewData["Name"];

        // stock price info
        companyDataObj.globalQuote.open = returnedPriceData["Global Quote"]["02. open"]; // POSSSIBLE WAY TO ASSIGN
        companyDataObj.globalQuote.high = returnedPriceData["Global Quote"]["03. high"]; // POSSSIBLE WAY TO ASSIGN
        companyDataObj.globalQuote.low = returnedPriceData["Global Quote"]["04. low"]; // POSSSIBLE WAY TO ASSIGN
        companyDataObj.globalQuote.price = returnedPriceData["Global Quote"]["05. price"]; // POSSSIBLE WAY TO ASSIGN
        companyDataObj.globalQuote.volume = returnedPriceData["Global Quote"]["06. volume"]; // POSSSIBLE WAY TO ASSIGN
        companyDataObj.globalQuote.previousClose = returnedPriceData["Global Quote"]["08. previous close"]; // POSSSIBLE WAY TO ASSIGN

        // general stock info
        companyDataObj.overview.assetType = returnedOverviewData["AssetType"];
        companyDataObj.overview.description = returnedOverviewData["Description"];
        companyDataObj.overview.CIK = returnedOverviewData["CIK"];
        companyDataObj.overview.exchange = returnedOverviewData["Exchange"];
        companyDataObj.overview.currency = returnedOverviewData["Currency"];
        companyDataObj.overview.country = returnedOverviewData["Country"];
        companyDataObj.overview.sector = returnedOverviewData["Sector"];
        companyDataObj.overview.industry = returnedOverviewData["Industry"];
        companyDataObj.overview.address = returnedOverviewData["Address"];
        companyDataObj.overview.divPerShare = returnedOverviewData["DividendPerShare"];

        return companyDataObj; // Return the name of the string
    }
    catch(error)
    {
        // Handle errors
        console.error('Error fetching the stock information:', error);
        throw error; // Re-throw the error to propagate it
    }
}

/*
 * Test 2: Define the function to fetch stock data
*/
export async function getStock(stockSymbol: string) {
    //craft the url request to send to the API
    const url = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stockSymbol + "&apikey=JFPBYRJXEF9A6DAB";

    try {
        // Fetch data from the API
        const apiRequest = await fetch(url);
        const returnedData = await apiRequest.json();

        // Return the fetched data
        return returnedData;
    } catch (error) {
        // Handle errors
        console.error('Error fetching requested data:', error);
        throw error; // Re-throw the error to propagate it
    }
}

/*
 * Test 3: Define the function to fetch stock price
*/
export async function getCurrentStockPrice(stockSymbol: string)
{
    //craft the url request to send to the API
    const url =  "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=JFPBYRJXEF9A6DAB"

    try {
        // Fetch data from the API
        const apiRequest = await fetch(url);
        const returnedData = await apiRequest.json();

        const currentStockPrice = returnedData["Global Quote"]["05. price"];

        return currentStockPrice; // Return the name of the string
        
    } catch (error) {
        // Handle errors
        console.error('Error fetching the stock name:', error);
        throw error; // Re-throw the error to propagate it
    }
}

// Example usage of the getStock function
async function exampleUsage() {
    try {
       // const stockData = await getStock("AAPL");
       // const price = await getCurrentStockPrice("AAPL");
        //const firstMatch = stockData.bestMatches[0];

       let companyData = getCompanyData("AAPL");

        // Print out the contents once the Promise resolves
        companyData.then(data => {
            console.log(data);
        }).catch(error => {
            // Handle errors
            console.error("Error fetching data:", error);
        });


        // results to log below: 
        //console.log("name: " + firstMatch["1. symbol"]); // Output the fetched data
        //console.log("price: " + price); // Output the fetched data
    } catch (error) {
        console.error('Error in exampleUsage:', error);
    }
}

// Call the exampleUsage function to fetch stock data
exampleUsage();
