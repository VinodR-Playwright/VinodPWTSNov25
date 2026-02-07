import{test , expect} from '@playwright/test'
import { DashboradPage } from '../../pages/DashboradPage'
import { LoginPage } from '../../pages/LoginPage'
import datas from '../../Testdata/DataDriven.json';

let loginP : LoginPage
let dashboradP : DashboradPage

test.beforeEach("Precondition Of test scripts" , async({page})=>{
    loginP = new LoginPage(page)
    dashboradP = new DashboradPage(page)
   
})

for(let product of datas){

test(`Add product to the cart for ${product.productName}` , async({})=>{
    await loginP.launchURL(product.url)
    await loginP.loginIntoApp(product.email,product.password)
    await dashboradP.searchAddTOCart(product.productName);
    await expect(dashboradP.addTOCartMsg).toHaveText("Product Added To Cart")
})

}