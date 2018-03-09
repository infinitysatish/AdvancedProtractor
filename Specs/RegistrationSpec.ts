import { RegistrationPage } from '../Pages/RegistrationPage';
var using = require('jasmine-data-provider');
// import * as JSON from 'load-json-file';

let regPage = new RegistrationPage();

describe('Registration Page Scenarios', () => {
    beforeEach(() => {
        regPage.GoToUrl(regPage.url);
        // regPage.ClickRegistrationTab();
    });

   // var regdata = JSON.sync("../Automation/data/registration.json");
   var regData = regPage.LoadJsonFile("registration.json");

    it('Verify UI Elements Presence', () => {
        expect(regPage.lRegistrationTab.isDisplayed()).toBe(true);
        expect(regPage.lUsername.isDisplayed()).toBe(true);
        expect(regPage.lEmail.isDisplayed()).toBe(true);
        expect(regPage.lPassword.isDisplayed()).toBe(true);
        expect(regPage.lCustomerName.isDisplayed()).toBe(true);
        expect(regPage.lPhoneNumber.isDisplayed()).toBe(true);
        expect(regPage.lRegistrationBtn.isDisplayed()).toBe(true);
    });

    using(regData,(data,description) => {

        it(description, () => {
            regPage.RegistrationObj(data);
            // registration sucessfull message expect required
        });
    });
});