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

    it("Quote Search Module should be displayed", () => {
        expect(BusinessHome.PremarketSearchModule.isDisplayed()).to.be.true
    })

    it("Check for the Quote search", () =>{
        browser.pause(4000);
        BusinessHome.MarketRibbonModule.scrollIntoView();
        BusinessHome.PremarketSearchText.setValue("GOOGL") 
        browser.pause(10000)
        BusinessHome.QuoteSearchResultOption.keys('Down arrow')
        browser.pause(10000)
        BusinessHome.QuoteSearchFirstResult.keys("\uE007")
        browser.pause(10000)

      var url = browser.getUrl();
      console.log("The URL is " +url);

      expect(url).to.equal("http://juno-biz.cnnio.net/business/markets/new-quote/GOOGL"); 

    })

})