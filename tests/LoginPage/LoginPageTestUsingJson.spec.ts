import {test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { log } from 'node:console'

import data from '../../Testdata/logindata.json'

let loginpage :LoginPage

test.beforeEach("Precondition of Test script" , async({page})=>{
      loginpage = new LoginPage(page);
      await loginpage.launchURL(data.url)

})

test('Valid Login test',{tag : ['@smoke','@regression']}, async () => {
    await loginpage.loginIntoApp(data.email,data.password);
    await expect(loginpage.homePageIdentifier).toBeVisible()

})