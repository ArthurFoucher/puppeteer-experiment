import * as puppeteer from 'puppeteer';
import config from './config';

const { path } = config;

export class App {
  public async run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.pdf({ path: `${path}/google.pdf` });

    await browser.close();
  }
}
