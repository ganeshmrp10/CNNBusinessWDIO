require("dotenv").config();

exports.config = {  
  services: ["firefox-profile", "selenium-standalone","chromedriver"],
  updateJob: false,
  specs: [],
  exclude: [],
  suites: {},
  logLevel: "silent",
  coloredLogs: true,
  screenshotPath: "./error/screenshots",
  waitforTimeout: 30000,
  deprecationWarnings: false,
  plugins: {
    "wdio-screenshot": {}
  },
  capabilities: [{
    browserName: 'chrome',
    "goog:chromeOptions": {
        args: ['headless', 'disable-gpu']
    }
}],

  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    ui: "bdd",
    compilers: ["js:@babel/register"],
    timeout: 100 * 1000
  },

  // Gets executed before all workers get launched.
  onPrepare() {},
  // Gets executed before test execution begins. At this point you will have access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before() {
    const chai = require("chai");
    global.expect = chai.expect;
  },
  after() {},
  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  onComplete() {}
};
