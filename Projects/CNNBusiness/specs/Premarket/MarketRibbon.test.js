import BusinessHome from "../../page_objects/BusinessHome";

const assert = require('assert');

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("Business Home invoke", function () {
    beforeEach(function () {
        console.log("running something before each test");
    });

    it("Premarket page should be launched", () => {
        BusinessHome.nOpen("/business/markets/premarkets");
        browser.maximizeWindow();
    })

    it("Market Ribbon Module should be displayed", () => {
        expect(BusinessHome.MarketRibbonModule.isDisplayed()).to.be.true
    })

    it("Check for the Market Ribbon Quotes content", () => {

        const elementsMarketRibbonName = BusinessHome.MarketRibbonQuotesName
        let quoteNameArray =[];
        elementsMarketRibbonName.forEach(link => {
            const quoteName = link.getText()
            console.log("Quote Name : " +quoteName)
            quoteNameArray.push(quoteName)

        });
        console.log("The Quote Name array " +quoteNameArray)

        let originalQuoteNameArray = ["DOW","S&P 500","NASDAQ","FTSE 100","DAX","CAC 40","NIKKEI 225","SE COMPOSITE","HANG SENG"]
        let compareQuoteNameArray = [];

        compareQuoteNameArray= originalQuoteNameArray.map(testQuoteName => {
            return { 'Quote Name': testQuoteName, 'Match Status': quoteNameArray.includes(testQuoteName)};
        });

        console.log(compareQuoteNameArray);

    })

    it("Check for the Market Ribbon Quotes URL ", () => {

        const elementsMarketRibbonQuotes = BusinessHome.MarketRibbonQuotesList
        var quoteURLArray =[];
        elementsMarketRibbonQuotes.forEach(link => {
            const quoteURL = link.getAttribute('href')
            console.log("Quote URL : " + quoteURL)
            quoteURLArray.push(quoteURL)
        });
        console.log("The Quote URL array " +quoteURLArray)
    })

    

})