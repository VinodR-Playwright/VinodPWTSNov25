import {test ,expect } from '@playwright/test'

test('To Handle frames' ,async ({page}) =>{

        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        await page.locator("#checkboxoption1").click();


        const framePage = await page.frameLocator('#courses-iframe')

        await framePage.getByText("All Access Plan").first().click()
        await expect(framePage.locator('.inner-box h1')).toHaveText('All Access Subscription');

        //await page.locator([@value='radio2']).click();
})