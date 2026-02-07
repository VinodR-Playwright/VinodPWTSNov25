import { test, expect } from '@playwright/test';


test('Browser Fixture', async ({ browser }) => {
 const newCont = await browser.newContext()
 const page = await newCont.newPage()
 await page.waitForTimeout(5000)
 await page.goto('https://google.com/');

 const page1 = await newCont.newPage()
 await page1.waitForTimeout(5000)
 await page1.goto('https://facebook.com/');

const newCont2 = await browser.newContext()
 const page2 = await newCont2.newPage()
 await page2.waitForTimeout(5000)
 await page2.goto('https://gmail.com/');

});


