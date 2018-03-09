import { } from 'jasmine';
import { LoginPage } from '../Pages/LoginPage';
var using = require('jasmine-data-provider');
// import * as JSON from 'load-json-file';


let loginPage = new LoginPage();

describe('Login Page Scenarios', () => {

    beforeEach(() => {
        loginPage.GoToUrl(loginPage.url);
    });
     
    // var loginData = JSON.sync("../Automation/data/login.json");
    var loginData = loginPage.LoadJsonFile("login.json");

    it('Verify UI Elements Presence', () => {
        //expect(loginPage.GetTitle()).toBe("Login");
        expect(loginPage.lLoginTab.isDisplayed()).toBe(true);
        expect(loginPage.lUsername.isDisplayed()).toBe(true);
        expect(loginPage.lPassword.isDisplayed()).toBe(true);
        expect(loginPage.lLoginBtn.isDisplayed()).toBe(true); 
    });

    using(loginData, function(data,description) {
        
        it(description, () => {
            loginPage.LoginAs(data);
/*             if(loginPage.lErrorMessage.isDisplayed()){
                expect(loginPage.lErrorMessage.getText()).toBe(data.expected);
             } else {
                expect(loginPage.GetCurrentUrl()).toBe(data.expected);
             } */
        });
    });

});