/* av_data.tsx */

// Import any necessary modules or types
import { fetchData } from "@remix-run/react/dist/data";

export const alphaVantageApiKey = "JFPBYRJXEF9A6DAB"; 

export let companyData = {
    logo : "",  
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

export async function getCompanyData(stockSymbol : string)
{
    const urlForStockPrice = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=" + alphaVantageApiKey;
    const urlForStockOverview = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + stockSymbol + "&apikey=" + alphaVantageApiKey;

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
        companyData.logo = await getStockLogo(stockSymbol);
        companyData.symbol = returnedOverviewData["Symbol"];
        companyData.name = returnedOverviewData["Name"];

        // stock price info
        companyData.globalQuote.open = returnedPriceData["Global Quote"]["02. open"]; // POSSSIBLE WAY TO ASSIGN
        companyData.globalQuote.high = returnedPriceData["Global Quote"]["03. high"]; // POSSSIBLE WAY TO ASSIGN
        companyData.globalQuote.low = returnedPriceData["Global Quote"]["04. low"]; // POSSSIBLE WAY TO ASSIGN
        companyData.globalQuote.price = returnedPriceData["Global Quote"]["05. price"]; // POSSSIBLE WAY TO ASSIGN
        companyData.globalQuote.volume = returnedPriceData["Global Quote"]["06. volume"]; // POSSSIBLE WAY TO ASSIGN
        companyData.globalQuote.previousClose = returnedPriceData["Global Quote"]["08. previous close"]; // POSSSIBLE WAY TO ASSIGN

        // general stock info
        companyData.overview.assetType = returnedOverviewData["AssetType"];
        companyData.overview.description = returnedOverviewData["Description"];
        companyData.overview.CIK = returnedOverviewData["CIK"];
        companyData.overview.exchange = returnedOverviewData["Exchange"];
        companyData.overview.currency = returnedOverviewData["Currency"];
        companyData.overview.country = returnedOverviewData["Country"];
        companyData.overview.sector = returnedOverviewData["Sector"];
        companyData.overview.industry = returnedOverviewData["Industry"];
        companyData.overview.address = returnedOverviewData["Address"];
        companyData.overview.divPerShare = returnedOverviewData["DividendPerShare"];

        return companyData; // Return the name of the string
    }
    catch(error)
    {
        // Handle errors
        console.error('Error fetching the stock information:', error);
        throw error; // Re-throw the error to propagate it
    }
}

export async function getStockLogo(stockSymbol : string)
{
    let logoAddress: string;
    //C-<<ADD A NOTE HERE
    const urlForStockLogo = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=" + alphaVantageApiKey;

    try
    {
        //Fetch the stocks logo
        const logoAddressResponse = await fetch(urlForStockLogo);

        //C-<<ADD A NOTE HERE
        logoAddress = await logoAddressResponse.text();
    }
    catch(error)
    {
        // Handle errors
        console.error('Error fetching the stock logo:', error);
        throw error; // Re-throw the error to propagate it
    }

    return logoAddress;
}
