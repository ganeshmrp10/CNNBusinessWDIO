const master = require("../../wdio.conf")

exports.config = Object.assign(master.config, {
baseUrl: `http://juno-biz.cnnio.net`,
specs: ["./Projects/GalleryLeaf/specs/**/*.test.js"],

  exclude: [
    "./Projects/Michonne/specs/Critical/GDPR/default-script-blocking.test.js",
    "./Projects/Michonne/specs/Critical/GDPR/default-cookie-blocking.test.js"
  ],
  logLevel: 'error',
  suites: {

    BusinessHome:["./Projects/CNNBusiness/specs/Premarket/BusinessHome.test.js"],   
    MarketRibbon:["./Projects/CNNBusiness/specs/Premarket/MarketRibbon.test.js"],
    QuoteSearch:["./Projects/CNNBusiness/specs/Premarket/QuoteSearch.test.js"],
    PremarketHeader:["./Projects/CNNBusiness/specs/Premarket/PremarketHeader.test.js"],
    Work:["./Projects/CNNBusiness/specs/Premarket/Work.test.js"],
    Currencies:["./Projects/CNNBusiness/specs/Premarket/Currencies.test.js"],
    USStockFutures:["./Projects/CNNBusiness/specs/Premarket/USStockFutures.test.js"]
    
  },
  reporters: ["spec"],
  maxInstances: 1,
  port: 9515,
  path: '/',
  services: ["chromedriver"],
  capabilities: [
    {
      "browserName": "chrome",
         "goog:chromeOptions": {
           "args": ["disable-infobars","headless", "disable-gpu"]
       }
    }
  ],
})
