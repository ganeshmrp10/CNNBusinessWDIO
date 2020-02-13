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

    it("Currencies Module should be displayed", () => {
        expect(BusinessHome.CurrenciesModule.isDisplayed()).to.be.true
    })

    it("Check for the Currencies Module Change Value", () => {

        const elementsCurrenciesChange = BusinessHome.CurrenciesChange
        if (elementsCurrenciesChange.length == 6) {
            for (var i = 0; i < elementsCurrenciesChange.length; i++) {
                console.log("Currencies value : " + elementsCurrenciesChange[i].getText());

            }
        }

    })

    it("Check for the Currencies Module Change Color Code", () => {

        const elementsCurrenciesChange = BusinessHome.CurrenciesChange
        if (elementsCurrenciesChange.length == 6) {

            elementsCurrenciesChange.forEach(link => {

                const arrayColor = link.getCSSProperty('color')
                var parseJSONColor = JSON.stringify(arrayColor['parsed']);
                var hexColorCode = parseJSONColor.slice(8, 15)
                console.log("Color code : " + hexColorCode)
            });
        }


    })

})