import { Config, browser } from "protractor";
var HtmlReporter = require("protractor-beautiful-reporter");
var path = require("path");

exports.config = {
  // directConnect:true,
   seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.9.1.jar',
  //seleniumAddress: "http://localhost:4444/wd/hub",
  seleniumPort: null,
  // chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.35.exe',
  // FirefoxDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.19.1.exe',
  seleniumArgs: [],

  sauceUser: null,
  sauceKey: null,

  // specs: ["./Specs/*.js"],
  suites: {
    login: [
      './Specs/LoginSpec.js'
      ],
    registration: [
        './Specs/RegistrationSpec.js'
      ]
    },

/*   capabilities: {
    browserName: "firefox",
    acceptSslCerts: true,
    shardTestFiles: false,
    maxInstances: 1
    }, */
    
  multiCapabilities: [
/*     {
      browserName: "internet explorer"
    }, */
    {
      browserName: "chrome",
      logName: "Chrome - English",
      version: "",
      platform: "ANY",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: "firefox",
      acceptSslCerts: true,
      shardTestFiles: false,
      maxInstances: 1
    }
    ], 

  baseUrl: "http://192.168.0.135:3000/",
  framework: "jasmine",
  rootElement: "body",
    
  onPrepare: function() {
    browser.manage().window().maximize();
        // Add a screenshot reporter:
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        preserveDirectory: false, // false to clear all
        takeScreenShotsOnlyForFailedSpecs: true,
        screenshotsSubfolder: "images",
        jsonsSubfolder: "jsons",
        baseDirectory: "Reports",
        docTitle: "Self Service Portal Test Report", //  Default is Generated test report.
        // docName: "index.html", //  Default is report.html.
        pathBuilder: function pathBuilder(spec,descriptions,results,capabilities) {
          // Return '<30-12-2016>/<browser>/<specname>' as path for screenshots:
          // Example: '30-12-2016/firefox/list-should work'.
          var d = new Date(),
            day = ('0' + d.getDate()).slice(-2),
            month = ('0' + (d.getMonth() + 1)).slice(-2),
            year = d.getFullYear();
         
          var validDescriptions = descriptions.map(function(description) {
            return description.replace("/", "@");
          });

          return path.join(
            day + "-" + month + "-" + year,
            capabilities.get("browserName"),
            validDescriptions.join("-")
          );
        },
        sortFunction: function sortFunction(a, b) {
          if (a.sessionId < b.sessionId) return -1;
          else if (a.sessionId > b.sessionId) return 1;

          if (a.timestamp < b.timestamp) return -1;
          else if (a.timestamp > b.timestamp) return 1;

          return 0;
        }
      }).getJasmine2Reporter()
    );
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
};
