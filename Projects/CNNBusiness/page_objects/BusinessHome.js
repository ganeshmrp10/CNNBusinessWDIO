import Page from "../../shared_objects/Page";

class BusinessHome extends Page {

  get CNNBusinessLogo() {
    return $("(//*[@class='business-logo-icon'])[1]");
  }
  get MarketRibbonModule() {
    return $("//div[@data-tracking='MarketRibbon']");
  }
  get PremarketSearchModule() {
    return $("//div[@role='combobox']");
  }
  get USStockFuturesModule() {
    return $("//div[@name='anchor-futures']");
  }
  get LatestMarketNews() {
    return $("//div[@name='anchor-news']");
  }
  get WhatsMovingModule() {
    return $("//div[@name='anchor-gainerslosers']");
  }
  get WorldMarketsModule() {
    return $("//div[@name='anchor-worldmarkets']");
  }
  get CurrenciesModule() {
    return $("//div[@name='anchor-currencies']");
  }
  get CommoditiesModule() {
    return $("//div[@name='anchor-commodities']");
  }
  get BondsInterestModule() {
    return $("//div[@name='anchor-bonds']");
  }
  get OutbrainModule() {
    return $("//div[@class='ob-smartfeed-wrapper']");
  }
  get PremarketSearchText() {
    return $("//input[@placeholder='Pre-market quote']");
  }
  get QuoteSearchResultOption() {
    return $("//*[@aria-controls='downshift-0-menu']");
  }
  get QuoteSearchFirstResult() {
    return $("//*[@aria-activedescendant='downshift-0-item-0']");
  }
  get MarketRibbonQuotesList() {
    return $$("//div[@data-tracking='MarketRibbon']//div[contains(@class,'styles__Container')]");
  }
  get MarketRibbonQuotesName() {
    return $$("//div[contains(@class,'styles__Container')]//div[contains(@class,'Flex')]//span[contains(@class,'market-colored')]");
  }

  get PremarketHeader() {
    return $("//h1[contains(@class,'PageHeader')]");
  }

  get CurrenciesHeader() {
    return $("//div[@name='anchor-currencies']//h2[contains(@class,'titlestyles')]");
  }

  get CurrenciesName() {
    return $$("//div[@name='anchor-currencies']//td/div[not(contains(@class,'DataPoint'))]");
  }

  get CurrenciesChange() {
    return $$("//div[@name='anchor-currencies']//div[contains(@class,'DataPoint')]//span");
  }

  nOpen(path) {
    super.open(path);
  }
  enableOpen(path) {
    this.nOpen(path);
    browser.setCookie({ name: "geoData", value: "London|England|SW6|GB|EU|0|Broadband" });
    browser.deleteCookie("OptanonConsent");
    this.nOpen(path);
  }
}
export default new BusinessHome();