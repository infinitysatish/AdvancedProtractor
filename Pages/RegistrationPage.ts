import { BasePage } from "./BasePage";
import { IdentificationType } from "./EIdentificationType";
import { regLocator } from "../Locators/registration";

export class RegistrationPage extends BasePage{
    url = regLocator.Url;
    lRegistrationTab = this.ElementLocator(regLocator.RegistrationTab);
    lUsername = this.ElementLocator(regLocator.Username);
    lEmail = this.ElementLocator(regLocator.Email);
    lPassword = this.ElementLocator(regLocator.Password);
    lCustomerName = this.ElementLocator(regLocator.CustomerName);
    lPhoneNumber = this.ElementLocator(regLocator.PhoneNumber);
    lRegistrationBtn = this.ElementLocator(regLocator.RegistrationBtn);

    RegistrationObj(jsonObj){
        return this.Registration(jsonObj.username,jsonObj.email,jsonObj.password,jsonObj.customername,jsonObj.phonenumber);
    }

    Registration(username,email,password,customername,phonenumber){
        this.lUsername.sendKeys(username);
        this.lEmail.sendKeys(email);
        this.lPassword.sendKeys(password);
        this.lCustomerName.sendKeys(customername);
        this.lPhoneNumber.sendKeys(phonenumber);
        return this.lRegistrationBtn.click();
    }

    ClickRegistrationTab(){
        return this.lRegistrationBtn.click();
      }
}