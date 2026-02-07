//Locators related to login page and methods related to login page
import {Locator, Page} from "Playwright";

export class LoginPage{

 //Locators related to login page only and methods 
 page : Page
 username : Locator
 password : Locator
 loginBtn : Locator
 errorMsg : Locator
 homePageIdentifier :Locator

 //Initializing te variable / locators

 constructor(page:Page){
    this.page = page

    this.username = this.page.getByPlaceholder("email@example.com") 
    this.password = this.page.getByPlaceholder("enter your passsword") 
    this.loginBtn = this.page.locator("#login") 
    this.errorMsg = this.page.locator("#toast-container") 
    this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/myorders']") 


 }

    //Methods Related to Login page

    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApp(username:string ,passsword:string){
        await this.username.fill(username)
        await this.password.fill(passsword)
        await this.loginBtn.click();
    }





 }

