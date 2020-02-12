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
        BusinessHome.nOpen("http://juno-biz.cnnio.net/business/markets/premarkets");
        browser.maximizeWindow();
    })

    it("Commodities link should be retrieved", () => {

        const Link = $('//div[@title="Commodities"]//a');
        const finalURL = Link.getAttribute('href')
        console.log("The correct link is " + finalURL)

    })


    var linkMap = new Map([
        ["Commodities", "http://money.cnn.com/data/commodities/"],
        ["Currencies", "http://money.cnn.com/data/currencies/"]
    ]);
    for (var [key, value] of linkMap) {
        pvr(key, value);
    }
    function pvr(key, value) {
        it(key + " link in the header should verify correct URL", () => {

            browser.pause(4000);
            
            const Link = $("div[title=" + key + "]").$("a")
            console.log("The xpath is " + Link)
            const urlLink = Link.getAttribute('href')
            expect(urlLink).to.have.string(value)

        });
    }
})