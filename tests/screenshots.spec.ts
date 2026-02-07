import {test , expect} from '@playwright/test'

test('To Take screenshot of page' , async({page}) =>{

   await page.goto('https://testautomationpractice.blogspot.com/');
   await page.screenshot({path: 'screenshots/page.png'});



});

test('To Take screenshot of element' , async({page}) =>{

   await page.goto('https://testautomationpractice.blogspot.com/');

   await page.getByPlaceholder("Enter Name").screenshot({path: 'screenshots/ele.png'})


});

test('To Take screenshot of Full page' , async({page}) =>{

   await page.goto('https://testautomationpractice.blogspot.com/');

   await page.screenshot({path: 'screenshots/fullpage.png' , fullPage:true});


});