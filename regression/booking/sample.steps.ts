import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import link from '../../locators/linkNavigators'

let browser: Browser;
let page: Page;


Given('I am on the Playwright homepage', async () => {
  browser = await chromium.launch({headless:false});
  page = await browser.newPage();
  await page.goto(link.login);
});

When('I click on the {string} button', async (buttonText: string) => {
  await page.click(`text=${buttonText}`);
});

Then('I should see the {string} guide', async (guideText: string) => {
  const content = await page.textContent('h1');
  expect(content).toContain(guideText);
  await browser.close();
});
       