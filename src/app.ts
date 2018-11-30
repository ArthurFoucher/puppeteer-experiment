import * as fs from 'fs';
import * as puppeteer from 'puppeteer';
import config from './config';

const { writeFile } = fs.promises;
const { path } = config;

export class App {
  public async run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const response = await page.goto('https://google.com');

    if (response !== null) {
      const text = await response.text();
      await writeFile(`${path}/source.html`, text);
    }

    await browser.close();
  }
}
