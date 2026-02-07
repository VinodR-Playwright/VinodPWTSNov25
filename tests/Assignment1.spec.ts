import {test , expect} from '@playwright/test'

test('To Place Order' , async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill("mwankhede221122@gmail.com");

    await page.locator("#userPassword").fill("Wankhede@221122");

    await page.locator("#login").click();

    await page.waitForTimeout(3000)
    await page.getByText("Add To Cart").first().click();

    await page.getByRole('button' , {name:'Cart'}).first().click()

     await page.getByText("Checkout").click();

    await page.getByPlaceholder("Select Country").click();
    await page.getByPlaceholder("Select Country").pressSequentially("India")

    await page.getByText(" India").last().click();

    await page.getByText("Place Order").click();

    const orderID = await page.locator("//label[contains(text(),' Orders History Page ')]//following::label").textContent();
    console.log("Order ID -------->  "+orderID)

})