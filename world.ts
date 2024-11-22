import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';
console.log('Custom World loaded');

class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async openBrowser() {

    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();

  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);