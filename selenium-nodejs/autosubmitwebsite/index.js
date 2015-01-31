// @TODO
// 1. Get Url
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

var emailId  = process.argv[2];
var password = process.argv[3];

function frontPageLogin()  {
    return webdriverio
    .remote(options)
    .init()
    .once('countme', function(e) {
      console.log('elements were found');
    })
    .url('http://www.naukri.com')
    .click('*[id="login_Layer"]')
    .log('client')
    .setValue('*[id="eLogin"]', emailId)
    .setValue('*[id="pLogin"]',password)
    .click("div.row:nth-child(13) > button:nth-child(1)");
}

function loginPage()  {
    return webdriverio
    .remote(options)
    .init()
    .once('countme', function(e) {
      console.log('elements were found');
    })
    .url('http://login.naukri.com')
    .click('*[id="login_Layer"]')
    .log('client','ALL')
    .click('//*[@id="emailRad"]')
    .pause(10000)
    .saveScreenshot("./loginPageSnapShot.png", function(err,screenshot, res){
      console.log(err);
    })
    // .getCssProperty('#emailtxt', 'display', function(err, dis) {
    //   console.log("displaying value");
    //   console.log(err);
    // })
    .waitFor('#emailTxt', 5000, function(err, res) {
        console.log(err);
    })
    .submit("#logFormI")
    .setValue('#emailTxt', emailId)
    .setValue('#pwd1',password)
    .click('#sbtLog');
}

function updateProfilePage() {
var frontPageln = frontPageLogin();

      frontPageln
      .pause(3000)
      .click("#leftNav_updateProfile")
      .click("#leftNav_updateProfile > ul:nth-child(1) > li:nth-child(1) > a:nth-child(2)")
      .pause(2000)
      .setValue("#summary","Team Lead with 6+ experience in USA and overall 13+ Experience working in Java8 Nodejs Backbonejs Javascript selenium")
      .getText("#summary", function(err, text){
        console.log(text);
      })
      .saveScreenshot("./summarySnapShot.png", function(err,screenshot, res){
        console.log(err);
      })
      // .elementIdValue("#summary","Team Lead with 6+ experience in USA and overall 13+ Experience working in Nodejs Backbonejs Javascript selenium", function(err, res){
      //   console.log(res);
      // })
      .click(".w150bt", function(err,res){
        // console.log(res);
      })
      .pause(3000)
      .back()
      // .newWindow("http://www.google.com/").pause(3000)
      .refresh()
      .log('server')
      .log('driver','ALL')
      .emit('countme', "cnt")
      .pause(1000)
      .title(function(err, res) {
          console.log('Title was: ' + res.value);
      })
      .end();
}


updateProfilePage();
