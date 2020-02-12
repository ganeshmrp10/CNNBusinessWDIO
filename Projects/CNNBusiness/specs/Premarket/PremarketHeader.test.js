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


    var linkMap = new Map([
        ["markets", "https://cnn.com/business/markets"],
        ["tech", "https://www.cnn.com/business/tech"],
        ["media", "https://www.cnn.com/business/media"],
        ["success", "https://www.cnn.com/business/success"],
        ["perspectives", "https://www.cnn.com/business/perspectives"],
        ["business-videos", "https://www.cnn.com/business/videos"]
    ]);
    for (var [key, value] of linkMap) {
        pvr(key, value);
    }
    function pvr(key, value) {
        it(key + " link in the header should verify correct URL", () => {

            browser.pause(4000);
            const locatorHeader = $("a[name=" + key + "]");
            const urlLink = locatorHeader.getAttribute('href')
            expect(urlLink).to.have.string(value)
        });
    }
})