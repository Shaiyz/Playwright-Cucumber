import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import LoginClass from '../../pages/00-authentication/loginPage'
import link from '../../locators/linkNavigators'

let browser: Browser;
let page: Page;


Given('lolol', async () => {
  browser = await chromium.launch({headless:false});
  page = await browser.newPage();
  await page.goto(link.login);
});

When('hu {string} hu', async (buttonText: string) => {
  await page.click(`text=${buttonText}`);
});

Then('ko {string} ko', async (guideText: string) => {
  const content = await page.textContent('h1');
  expect(content).toContain(guideText);
  await browser.close();
});
       