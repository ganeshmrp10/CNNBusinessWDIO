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
        let firstArray = ["DOW","S&P 500","NASDAQ","FTSE 100","DAX","CAC 40","NIKKEI 225","SE COMPOSITE","HANG SENG"]
        let secondArray = ["DOW","S&P 500","NASDAQ","FTSE 100","DAX","CAC 40","NIKKEI 225","SE COMPOSITE","HANG SENG"]
        let jsonArray = [];

        jsonArray = firstArray.map(i => {
            return { 'Quote Name': i, 'Match Status': secondArray.includes(i) };
        });

        console.log(jsonArray);
    })


})