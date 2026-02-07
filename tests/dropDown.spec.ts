import {test ,expect} from '@playwright/test'


test("DD deveploed by Select Tag" , async ({page}) =>{

 await page.goto("https://testautomationpractice.blogspot.com/")
 await page.waitForTimeout(3000)
 await page.locator("#country").selectOption("AR")     //default value
 await page.locator("#country").selectOption({value : 'FI'})  
 await page.locator("#country").selectOption({label : 'Bermuda'})
 await page.locator("#country").selectOption({index : 150})

//handle multip select dropdown

 await page.goto("https://demoqa.com/select-menu")

 await page.locator("#cars").selectOption(['volvo' , "opel"])
 await page.waitForTimeout(3000)
 await page.locator("#cars").selectOption([{label : 'saab'}, {index :3} , {value : 'volvo'}])
 
})

