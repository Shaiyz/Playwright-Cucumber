import login from '../../locators/loginPageLocators'
import link from '../../locators/linkNavigators'
import { chromium, Browser, Page } from 'playwright';
let browser: Browser;
let page: Page;

class LoginPage{
   async goToLogin() {
        browser = await chromium.launch({headless:false});
        page = await browser.newPage();
        await page.goto(link.login);
    }
}
const loginPage= new LoginPage()

export default loginPage;