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
        BusinessHome.nOpen("http://juno-biz.cnnio.net/business/markets/premarkets");
        browser.maximizeWindow();
    })

    it("Market Ribbon Module should be displayed", () => {
        expect(BusinessHome.MarketRibbonModule.isDisplayed()).to.be.true
    })

    it("Check for the Market Ribbon Module width", () =>{
        
        const elementMarketRibbon = BusinessHome.MarketRibbonModule;
        const marketRibbonWidth = elementMarketRibbon.getSize('width')
        
        console.log("The Market Ribbon Width is " +marketRibbonWidth)        
        expect(marketRibbonWidth).to.equal(1248);    
            
    })

    it("Check for the Market Ribbon Quotes content", () =>{
        
         const links = BusinessHome.MarketRibbonQuotesName

        links.forEach(link => 
           
            console.log(link.getText()) 
           
            );
            
    })

})