import {test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { log } from 'node:console'


const url = "https://rahulshettyacademy.com/client"
const email = "mwankhede221122@gmail.com"
const password = "Wankhede@221122"
const incorrectMsg = "Invalid"

let loginpage :LoginPage

test.beforeEach("Precondition of Test script" , async({page})=>{
      loginpage = new LoginPage(page);
      await loginpage.launchURL(url)

})

test('Valid Login test',{tag : '@smoke'}, async () => {
    await loginpage.loginIntoApp(email,password);
    await expect(loginpage.homePageIdentifier).toBeVisible()

})