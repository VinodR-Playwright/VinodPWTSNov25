//Locators related to Dashborad page and methods related to login page
import {Locator, Page} from "Playwright";

export class DashboradPage{

    page : Page
    Products : Locator
    addTOCartMsg :Locator
    pdpProductName : Locator
    pdpProductPrice : Locator

    constructor(page:Page){
        this.page = page
        this.Products = this.page.locator("div.card-body")
        this.addTOCartMsg = this.page.locator("#toast-container")
        this.pdpProductName = this.page.locator("div.container h2")
        this.pdpProductPrice = this.page.locator("div.container h3")

    }

    async searchAddTOCart(productName:string){
        await this.Products.first().waitFor()
        //count is a method to return total number of ele with the locator
        const countOfProducts = await this.Products.count()

        for(let i=0; i <countOfProducts; i++){
            //Get the text value of all products one by one

            const productText = await this.Products.nth(i).locator("h5").textContent()  // div.card-body h5    - this is the locator chaining
            console.log("Product Text--"+productText)
            if(productText === productName){
                await this.Products.nth(i).locator("button").last().click()
                break
            }
        }
    }
        async searchViewButton(productName:string){
        await this.Products.first().waitFor()
        //count is a method to return total number of ele with the locator
        const countOfProducts = await this.Products.count()

        for(let i=0; i <countOfProducts; i++){
            //Get the text value of all products one by one

            const productText = await this.Products.nth(i).locator("h5").textContent()  // div.card-body h5    - this is the locator chaining
            console.log("Product Text--"+productText)
            if(productText === productName){
                await this.Products.nth(i).locator("button").first().click()
                break
            }
        }


    }
}