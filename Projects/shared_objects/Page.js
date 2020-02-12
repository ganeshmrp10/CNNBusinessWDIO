const cheerio = require("cheerio")

class Page {
  get hamburgerNav() {
    return $("#hamburger-nav")
  }
  get BNBClose() {
    return $("button._0d8010d5");
  }
  get GDPR() {
    return $("div.optanon-alert-box-bg")
  }
  get GDPRClose() {
    return $("button.optanon-alert-box-close.banner-close-button")
  }
  get GDPRModal() {
    return $("#optanon-popup-wrapper")
  }
  get GDPRAccept() {
    return $("a.optanon-allow-all")
  }
  get GDPRDetailsTrigger() {
    return $("a.optanon-toggle-display")
  }
  get GDPRDetails() {
    return $("#optanon-popup-wrapper")
  }
  get GDPRDetailsClose() {
    return $("a.optanon-close-link.optanon-close.optanon-close-ui")
  }
  get GDPRPolicyMenu() {
    return $("a.banner-policy-link")
  }
  get GDPRPerformance() {
    return $("#Performance-Cookies")
  }
  get GDPRPersonalization() {
    return $("#Personalization-Cookies")
  }
  get GDPRAdvertising() {
    return $("#Advertising-Cookies")
  }
  get GDPRSocial() {
    return $("#Social-Media")
  }
  get GDPRCookiePolicy() {
    return $("li.menu-item-moreinfo.menu-item-off")
  }
  get GDPRStateToggle() {
    return $("div.optanon-status")
  }
  get GDPRSaveSettings() {
    return $('[title="Save preferences"]')
  }
  get GDPRPerformanceStatus() {
    return $("#chk80345")
  }
  get GDPRPersonalizationStatus() {
    return $("#chk72618")
  } 
  get GDPRAdvertisingStatus() {
    return $("#chk72623")
  } 
  get GDPRActiveStatus() {
    return $("#optanon-popup-more-info-bar > div > div.optanon-status-editable > form > span > p > label")
  }
  get GDPRSocialStatus() {
    return $("#chk72622")
  }

  disablePerformance() {
    this.GDPRPerformance.click()
    this.GDPRStateToggle.click()
  }

  disablePersonalization() {
    this.GDPRPersonalization.click()
    this.GDPRStateToggle.click()
  }

  disableAdvertising() {
    this.GDPRAdvertising.click()
    this.GDPRStateToggle.click()
  }

  disableSocial() {
    this.GDPRSocial.click()
    this.GDPRStateToggle.click()
  }

  removeBanners() {
    this.GDPRClose.click()
    if (this.BNBClose.isExisting() === true) this.BNBClose.click()
  }
  
  open(path) {
    if (!path) {
      browser.url("/")
    } else {
      browser.url(path)
    }
  }

  aggregateScripts() {
    let scriptAg = []

    const html = $("html").getHTML()
    $ = cheerio.load(html)
    const scripts = $("script")
    $(scripts).each(function(i, script){
        if ((script.attribs.src) && (script.attribs)){
            const newObj = {
                src: script.attribs.src,
                type: script.attribs.type,
                class: script.attribs.class
            }
            scriptAg.push(newObj)            
        }
    })
    return scriptAg
  }
  
  clickAndWait(elem, ms) {
    const selector = elem.selector
    console.log(selector)
    $(selector).click()
    browser.pause(ms)
  }

}

export default Page
