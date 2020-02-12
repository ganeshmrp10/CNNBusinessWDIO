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

    it("Currencies Module should be displayed", () => {
        expect(BusinessHome.CurrenciesModule.isDisplayed()).to.be.true
    })

    it("Check for the Currencies Module Change Value", () => {

        const elementsCurrenciesChange = BusinessHome.CurrenciesChange
        console.log("Length " + elementsCurrenciesChange.length)

        if (elementsCurrenciesChange.length == 6) {

            elementsCurrenciesChange.forEach(link =>
                
             console.log(link.getText())

            );
        }

    })

    it("Check for the Currencies Module Change Color Code", () => {

        const elementsCurrenciesChange = BusinessHome.CurrenciesChange
        console.log("Length " + elementsCurrenciesChange.length)

        if (elementsCurrenciesChange.length == 6) {

            elementsCurrenciesChange.forEach(link =>
                
             console.log(link.getCSSProperty('color'))

            );
        }

    })

})