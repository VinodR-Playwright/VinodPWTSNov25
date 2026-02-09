import{test , expect} from '@playwright/test'
import { DashboradPage } from '../../pages/DashboradPage'
import { LoginPage } from '../../pages/LoginPage'
import data from '../../Testdata/logindata.json'

let loginP : LoginPage
let dashboradP : DashboradPage

test.beforeEach("Precondition Of test scripts" , async({page})=>{
    loginP = new LoginPage(page)
    dashboradP = new DashboradPage(page)
    await loginP.launchURL(data.url)
    await loginP.loginIntoApp(data.email,data.password)
})

test("Add to Cart" , async({})=>{
    await dashboradP.searchAddTOCart(data.productName);
    await expect(dashboradP.addTOCartMsg).toHaveText("Product Added To Cart")
})

test("Validate user able to view product details", {tag:'@smoke'} ,async({page})=>{
    await dashboradP.searchViewButton(data.productName)
    await expect(dashboradP.pdpProductName).toHaveText(data.productName)

})