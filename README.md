## CNN-QA

A simple front-end test automation framework using WebdriverIO -- a CI job would trigger the test runs via npm script invocation, which would execute in a test service like browserstack, on whatever permutation of browsers and platforms defined in the project capabilities objects.

**Get started**

-   install git & nodejs/npm (i suggest via nvm [https://github.com/creationix/nvm/], using node 8.12.0)

-   install your local dependencies

```
npm install
```

-   copy the `.envschema` file to a `.env` file

```
cp .envschema .env
```

update `.env` to store auth keys for remote services (authentication for browserstack/saucelabs, metric collection data service auth, etc)

this framework is designed to be most effectively leveraged in CI settings, **_with a remote service such as Browserstack or Sauce Labs_** where Jenkins/Travis jobs simply run npm install and npm test upon completion of an upstream trigger. the `.env` file is where you will store your credentials for these services, such that they aren't committed. it will work locally but is not designed to scale from your laptop.

```
npm run hope
```
