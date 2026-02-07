import{test , expect} from '@playwright/test'
import { DashboradPage } from '../../pages/DashboradPage'
import { LoginPage } from '../../pages/LoginPage'
import { ExcelUtils } from '../../utils/ExcelUtils';    
import path from 'path'

const filPath = path.join(__dirname , "../TestData/excel.xlsx")
const sheeName ="Login"


let datas
try{
datas = ExcelUtils.getDataFromExcel(filPath, sheeName)
}
catch(e){
    console.log(e)
}

let loginP : LoginPage
let dashboradP : DashboradPage

test.beforeEach("Precondition Of test scripts" , async({page})=>{
    loginP = new LoginPage(page)
    dashboradP = new DashboradPage(page)
   
})

// for(let product of datas){

// test(`Add product to the cart for ${product.productName}` , async({})=>{
//     await loginP.launchURL(product.url)
//     await loginP.loginIntoApp(product.username,product.password)
//     await dashboradP.searchAddTOCart(product.productName);
//     await expect(dashboradP.addTOCartMsg).toHaveText("Product Added To Cart")
// })

//}