const puppeteer = require('puppeteer');

(async () => {
    let email = 'mbicknese1@gmail.com';
    let password = 'mrb07450';

    const browser = await puppeteer.launch({
    headless: false,
    });

    const page = await browser.newPage();
    await page.setRequestInterception(true);
    await page.goto('linkedin.com');
    await page.type("div.input input[name='session_key']", email);
    await page.type("div.input input[name='session_password']", password);
    await page.click('button.sign-in-form__submit-button');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page.goto('https://www.linkedin.com/mynetwork/')
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    
    

})();

