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

        var baseURL = "http://juno-biz.cnnio.net/business/markets/new-quote/"
        var quoteName ="GOOGL"
        var expectedURL = baseURL.concat(quoteName)

        browser.pause(4000);
        BusinessHome.MarketRibbonModule.scrollIntoView();
        BusinessHome.PremarketSearchText.setValue(quoteName) 
        browser.pause(10000)
        BusinessHome.QuoteSearchResultOption.keys('Down arrow')
        browser.pause(10000)
        BusinessHome.QuoteSearchFirstResult.keys("\uE007")
        browser.pause(10000)

      var redirectedURL = browser.getUrl();
      console.log("The Redirected URL is " +redirectedURL);

      expect(redirectedURL).to.equal(expectedURL); 

    })

})