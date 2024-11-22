import { Given, Then ,setDefaultTimeout} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import config from '../../config';

setDefaultTimeout(30 * 1000);


Given('I am on the e-commerce homepage', async function () {
  await this.page.goto(config.baseURL);
});

Then('I should see the website logo', async function () {
  const logo = this.page.locator('[data-id="217821"]');
  await expect(logo).toBeVisible();
  await this.closeBrowser();
});