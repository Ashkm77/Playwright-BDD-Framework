const { chromium, firefox, webkit } = require('playwright');
const config = require('../config');

const headless = config.headless
// (async () => {
//     const browser = await chromium.launch(); // Or 'firefox' or 'webkit'.
//     const page = await browser.newPage();
//     await page.goto('http://example.com');
//     // other actions...
//     await browser.close();
// })();

let browser = null;
let page = null;

async function launchBrowser() {
    browser = await chromium.launch({
        headless: headless
    });
    console.log('browser')
    return browser;
}

async function openNewPage() {
    await launchBrowser();
    page = await browser.newPage();
    console.log('page')
    return page;
}

const getBrowser = () => browser;
// const getPage = () => page;
async function getPage() {
    console.log(page)
    return page
}

module.exports = {
    launchBrowser,
    openNewPage,
    getBrowser,
    getPage
}