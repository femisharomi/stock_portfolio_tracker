"use strict";
/* av_data.tsx */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentStockPrice = exports.getStock = exports.getCompanyData = exports.companyDataObj = void 0;
//Functions to test
exports.companyDataObj = {
    logo: "", // assign logo in another 
    symbol: "",
    name: "",
    globalQuote: {
        open: "",
        high: "",
        low: "",
        price: "",
        volume: "",
        previousClose: ""
    },
    overview: {
        assetType: "",
        description: "",
        CIK: "",
        exchange: "",
        currency: "",
        country: "",
        sector: "",
        industry: "",
        address: "",
        divPerShare: ""
    }
};
/*
 * Test 1: Define the object companyData.
*/
function getCompanyData(stockSymbol) {
    return __awaiter(this, void 0, void 0, function () {
        var urlForStockPrice, urlForStockOverview, priceApiRequest, returnedPriceData, overviewApiRequest, returnedOverviewData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    urlForStockPrice = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=JFPBYRJXEF9A6DAB";
                    urlForStockOverview = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + stockSymbol + "&apikey=JFPBYRJXEF9A6DAB";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch(urlForStockPrice)];
                case 2:
                    priceApiRequest = _a.sent();
                    return [4 /*yield*/, priceApiRequest.json()];
                case 3:
                    returnedPriceData = _a.sent();
                    return [4 /*yield*/, fetch(urlForStockOverview)];
                case 4:
                    overviewApiRequest = _a.sent();
                    return [4 /*yield*/, overviewApiRequest.json()];
                case 5:
                    returnedOverviewData = _a.sent();
                    // Assigning the retireved values to the companyData object.
                    // Stock info
                    exports.companyDataObj.symbol = returnedOverviewData["Symbol"];
                    exports.companyDataObj.name = returnedOverviewData["Name"];
                    // stock price info
                    exports.companyDataObj.globalQuote.open = returnedPriceData["Global Quote"]["02. open"]; // POSSSIBLE WAY TO ASSIGN
                    exports.companyDataObj.globalQuote.high = returnedPriceData["Global Quote"]["03. high"]; // POSSSIBLE WAY TO ASSIGN
                    exports.companyDataObj.globalQuote.low = returnedPriceData["Global Quote"]["04. low"]; // POSSSIBLE WAY TO ASSIGN
                    exports.companyDataObj.globalQuote.price = returnedPriceData["Global Quote"]["05. price"]; // POSSSIBLE WAY TO ASSIGN
                    exports.companyDataObj.globalQuote.volume = returnedPriceData["Global Quote"]["06. volume"]; // POSSSIBLE WAY TO ASSIGN
                    exports.companyDataObj.globalQuote.previousClose = returnedPriceData["Global Quote"]["08. previous close"]; // POSSSIBLE WAY TO ASSIGN
                    // general stock info
                    exports.companyDataObj.overview.assetType = returnedOverviewData["AssetType"];
                    exports.companyDataObj.overview.description = returnedOverviewData["Description"];
                    exports.companyDataObj.overview.CIK = returnedOverviewData["CIK"];
                    exports.companyDataObj.overview.exchange = returnedOverviewData["Exchange"];
                    exports.companyDataObj.overview.currency = returnedOverviewData["Currency"];
                    exports.companyDataObj.overview.country = returnedOverviewData["Country"];
                    exports.companyDataObj.overview.sector = returnedOverviewData["Sector"];
                    exports.companyDataObj.overview.industry = returnedOverviewData["Industry"];
                    exports.companyDataObj.overview.address = returnedOverviewData["Address"];
                    exports.companyDataObj.overview.divPerShare = returnedOverviewData["DividendPerShare"];
                    return [2 /*return*/, exports.companyDataObj]; // Return the name of the string
                case 6:
                    error_1 = _a.sent();
                    // Handle errors
                    console.error('Error fetching the stock information:', error_1);
                    throw error_1; // Re-throw the error to propagate it
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.getCompanyData = getCompanyData;
/*
 * Test 2: Define the function to fetch stock data
*/
function getStock(stockSymbol) {
    return __awaiter(this, void 0, void 0, function () {
        var url, apiRequest, returnedData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stockSymbol + "&apikey=JFPBYRJXEF9A6DAB";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    apiRequest = _a.sent();
                    return [4 /*yield*/, apiRequest.json()];
                case 3:
                    returnedData = _a.sent();
                    // Return the fetched data
                    return [2 /*return*/, returnedData];
                case 4:
                    error_2 = _a.sent();
                    // Handle errors
                    console.error('Error fetching requested data:', error_2);
                    throw error_2; // Re-throw the error to propagate it
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getStock = getStock;
/*
 * Test 3: Define the function to fetch stock price
*/
function getCurrentStockPrice(stockSymbol) {
    return __awaiter(this, void 0, void 0, function () {
        var url, apiRequest, returnedData, currentStockPrice, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=JFPBYRJXEF9A6DAB";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    apiRequest = _a.sent();
                    return [4 /*yield*/, apiRequest.json()];
                case 3:
                    returnedData = _a.sent();
                    currentStockPrice = returnedData["Global Quote"]["05. price"];
                    return [2 /*return*/, currentStockPrice]; // Return the name of the string
                case 4:
                    error_3 = _a.sent();
                    // Handle errors
                    console.error('Error fetching the stock name:', error_3);
                    throw error_3; // Re-throw the error to propagate it
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getCurrentStockPrice = getCurrentStockPrice;
// Example usage of the getStock function
function exampleUsage() {
    return __awaiter(this, void 0, void 0, function () {
        var companyData;
        return __generator(this, function (_a) {
            try {
                companyData = getCompanyData("AAPL");
                // Print out the contents once the Promise resolves
                companyData.then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    // Handle errors
                    console.error("Error fetching data:", error);
                });
                // results to log below: 
                //console.log("name: " + firstMatch["1. symbol"]); // Output the fetched data
                //console.log("price: " + price); // Output the fetched data
            }
            catch (error) {
                console.error('Error in exampleUsage:', error);
            }
            return [2 /*return*/];
        });
    });
}
// Call the exampleUsage function to fetch stock data
exampleUsage();
