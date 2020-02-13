const merge = require("deepmerge");
const master = require("../../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: `http://${process.env.MICHONNE_ENV}.next.cnn.com/`,  
  specs: ["./Projects/GalleryLeaf/specs/**/*.test.js"],
  
  exclude: [
    "./Projects/Michonne/specs/Critical/GDPR/default-script-blocking.test.js",
    "./Projects/Michonne/specs/Critical/GDPR/default-cookie-blocking.test.js"
  ],
  logLevel: 'error',
  suites: {
    gdpr: ["./Projects/Michonne/specs/Critical/GDPR/*.test.js"],
    dev: ["./Projects/Michonne/specs/Critical/GDPR/cookie-policy.test.js"],
    functional: ["./Projects/Michonne/specs/Functional/*.test.js"],
    speedtrap: ["./Projects/Michonne/specs/Speedtrap/*.test.js"],
    video: ["./Projects/Michonne/specs/Video/*.test.js"],
    whitebox: ["./Projects/Michonne/specs/Whitebox/*.test.js"],
    performance: ["./Projects/Michonne/specs/Performance/*.test.js"]
  },
  reporters: ["spec"],
  maxInstances: 6,
  services: ["browserstack"],
  browserstackLocal: true,  
  capabilities: [
    {
      "project": `GalleryLeaf`,
      "browserstack.debug": true,
      "browser": "Chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]//,"headless", "disable-gpu"]
      },
      "resolution": `1280x1024`,
      "os": "Windows",
      "os_version": "10",
      "browserstack.local": "true",
      "browserstack.console": "errors",
      "browserstack.networkLogs": "true"
    }
  ],
  //browserstack credentials
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
});
