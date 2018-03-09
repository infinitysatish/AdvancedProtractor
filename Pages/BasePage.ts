import { element, By, browser } from 'protractor';
import { protractor } from "protractor/built/ptor";
import { IdentificationType } from './EIdentificationType';
import * as JSON from 'load-json-file';

export class BasePage{

    ElementLocator(obj: any){
        switch (obj.type) {
            case IdentificationType[IdentificationType.ID]:
                return element(By.id(obj.value));
            case IdentificationType[IdentificationType.NAME]:
                return element(By.name(obj.value));
            case IdentificationType[IdentificationType.CLASSNAME]:
                return element(By.className(obj.value));
            case IdentificationType[IdentificationType.CSS]:
                return element(By.css(obj.value));
            case IdentificationType[IdentificationType.JS]:
                return element(By.js(obj.value));
            case IdentificationType[IdentificationType.LINKTEXT]:
                return element(By.linkText(obj.value));
            case IdentificationType[IdentificationType.PARTIALLINKTEXT]:
                return element(By.partialButtonText(obj.value));
            case IdentificationType[IdentificationType.TAGNAME]:
                return element(By.tagName(obj.value));
            case IdentificationType[IdentificationType.XPATH]:
                return element(By.xpath(obj.value));         
            default:
                break;
        }
    }

    GoToUrl(url: string){
        // browser.get(url);
        browser.get(browser.baseUrl.concat(url));
    }

    GetCurrentUrl(){
        return browser.getCurrentUrl();
    }

    GetTitle(){
        return browser.getTitle();
    }

        // ".."" is picking Workspace Directory
    LoadJsonFile(filename: string){
        return JSON.sync("../Automation/Data/" + filename);
    }

    ConvertObjectToArray(ObjectType: any){
        var ArrayType = Object.keys(ObjectType).map(function(ObjectTypeIndex){
            let resultArray = ObjectType[ObjectTypeIndex];
            return resultArray;
        });
        return ArrayType;
    }

}