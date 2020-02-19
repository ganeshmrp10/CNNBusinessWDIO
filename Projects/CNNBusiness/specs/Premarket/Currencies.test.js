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

    it("Check for the Currency Name in the Currencies Module ", () => {

        const elementsCurrenciesName = BusinessHome.CurrenciesName
        var currencyNameArray = [];

        for (var i = 0; i < elementsCurrenciesName.length-1; i++) {

                currencyNameArray.push(elementsCurrenciesName[i].getText())
            }
            console.log("Currency Name array " + currencyNameArray)
            
    })


    it("Check for the Change Value in the Currencies Module", () => {

        const elementsCurrenciesChange = BusinessHome.CurrenciesChange
        var currencyValueArray = [];

        if (elementsCurrenciesChange.length == 6) {
            for (var i = 0; i < elementsCurrenciesChange.length; i++) {

                currencyValueArray.push(elementsCurrenciesChange[i].getText())
            }
            console.log("Currency Change Value array " + currencyValueArray)

        } else {
            console.error("Incorrect no of currencies change")
        }

    })

    it("Check for the Color Code value of the Change", () => {

        const elementsCurrenciesChange = BusinessHome.CurrenciesChange
        var currencyColorArray = [];
        if (elementsCurrenciesChange.length == 6) {

            elementsCurrenciesChange.forEach(link => {

                const arrayColor = link.getCSSProperty('color')
                var parseJSONColor = JSON.stringify(arrayColor['parsed']);
                var hexColorCode = parseJSONColor.slice(8, 15)

                currencyColorArray.push(hexColorCode)
            });
        }
        console.log("Color Code array " + currencyColorArray)

    })

    it("Verify the correct Color code for the Change value in the Currencies Module", () => {

        const elementsCurrenciesChange = BusinessHome.CurrenciesChange
        var currencyValueArray = [];

        for (var i = 0; i < elementsCurrenciesChange.length; i++) {

            currencyValueArray.push(elementsCurrenciesChange[i].getText())
        }

        var currencyColorArray = [];
        elementsCurrenciesChange.forEach(link => {

            const arrayColor = link.getCSSProperty('color')
            var parseJSONColor = JSON.stringify(arrayColor['parsed']);
            var hexColorCode = parseJSONColor.slice(8, 15)

            currencyColorArray.push(hexColorCode)
        });

        var mapValueColor = new Map([])
        currencyValueArray.forEach((key, value) => mapValueColor.set(key, currencyColorArray[value]));
        console.log(mapValueColor)

        for (var [key, value] of mapValueColor) {
            checkColorCode(key, value);
        }
        
        function checkColorCode(value, colorCode) {
            var wholeValue = value.substring(0, value.length-1);
                if (wholeValue>0 && colorCode == '#00a67a') {
                    console.log("Positive and has correct color code value")
                }
                else if (wholeValue<0 && colorCode == '#ff4b33') {
                    console.log("Negative and has correct color code value")
                }
                else{
                    console.log("Zero")
                }
            
            }
    })


})