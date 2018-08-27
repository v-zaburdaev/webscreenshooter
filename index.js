
'use strict';

const puppeteer = require('puppeteer');
const moment = require("moment");

const url='https://yandex.ru/maps/?ll=44.456790%2C56.057756&z=12&l=trf%2Ctrfe';
const outFilePrefix="shawa";
async function afterUrlOpen(page){
    await page.click(".lg-cc__button_type_action");
    await page.click(".sidebar-panel-view__close");
}

puppeteer.launch().then(async browser => {
    const date = new moment();
    const strdate = date.format("YYYY-MM-DD HH-mm-ss");

    const page = await browser.newPage();
    page.setViewport({width: 1920, height: 1080});

    await page.goto(url);
    await afterUrlOpen(page);
    await page.screenshot({path: outFilePrefix+'_'+strdate+'.png'});
    await browser.close();
  });