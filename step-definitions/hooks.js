const { BeforeAll, Before, BeforeStep, AfterStep, After, AfterAll } = require('@cucumber/cucumber');
const { getBrowser, getPage, openNewPage } = require('./base');
const config = require('../config');

let browserPage;

BeforeAll(async function () {
    console.log('Execution started');
});

Before(async function () {
    browserPage = await openNewPage();
    browserPage.goto(config.baseUrl, { waitUntil: 'domcontentloaded', timeout: 5000 });
    this.page = browserPage
})

BeforeStep(async function (scenario) {
    console.log(scenario.pickleStep.text)
});

AfterStep(async function () {
    console.log('step complete');
})

After(async function () {
    browserPage.close();
});

AfterAll(async function () {
    console.log('execution complete')
})