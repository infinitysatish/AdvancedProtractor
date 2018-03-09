import { BasePage } from './BasePage';
import { element, By, browser } from 'protractor';
import { loginLocator } from '../Locators/login';

export class LoginPage extends BasePage {

    url = loginLocator.Url;

    // Locators
    lLoginTab= this.ElementLocator(loginLocator.LoginTab);
    lUsername = this.ElementLocator(loginLocator.Username);
    lPassword = this.ElementLocator(loginLocator.Password);
    lLoginBtn = this.ElementLocator(loginLocator.LoginBtn);
    lErrorMessage = this.ElementLocator(loginLocator.ErrorMessage);
    
    // Used to Pass the Json Object Directly for Logging
    LoginAs(jsonObj:any){
        return this.Login(jsonObj.username, jsonObj.password);
    }

    // Used for Logging into Application
    Login(username:string, password:string){
        this.lUsername.sendKeys(username);
        this.lPassword.sendKeys(password);
        return this.lLoginBtn.click();
    }

    ClickLoginTab(){
      return this.lLoginBtn.click();
    }

}