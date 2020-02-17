import BusinessHome from "../../page_objects/BusinessHome";


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

    it("Market Ribbon should be displayed", () => {
        expect(BusinessHome.MarketRibbonModule.isDisplayed()).to.be.true
    })
    it("Quote Search Module should be displayed", () => {
        expect(BusinessHome.PremarketSearchModule.isDisplayed()).to.be.true
    })
    it("US Stock Futures Module should be displayed", () => {
        expect(BusinessHome.USStockFuturesModule.isDisplayed()).to.be.true
    })
    it("Latest Market News Section should be displayed", () => {
        expect(BusinessHome.LatestMarketNews.isDisplayed()).to.be.true
    })

    it("Whats Moving Module should be displayed", () => {
        expect(BusinessHome.WhatsMovingModule.isDisplayed()).to.be.true
    })
    it("World Markets Module should be displayed", () => {
        expect(BusinessHome.WorldMarketsModule.isDisplayed()).to.be.true
    })
    it("Currencies Module should be displayed", () => {
        expect(BusinessHome.CurrenciesModule.isDisplayed()).to.be.true
    })
    it("Commodities Module should be displayed", () => {
        expect(BusinessHome.CommoditiesModule.isDisplayed()).to.be.true
    })
    it("Bonds & Interests Module should be displayed", () => {
        expect(BusinessHome.BondsInterestModule.isDisplayed()).to.be.true
    })

})