// @TODO
// 1. Update Summary Dynamically
// 2. Get ScreenShot
// 3. Get Url

// .element("#summary", function(err, res){
//     console.log(res);
// })
// .url(function(url){
//   console.log(url);
// })
// .screenshot(function(res){
//   console.log(res);
// })
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

var emailId  = process.argv[2];
var password = process.argv[3];

webdriverio
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
    .click("div.row:nth-child(13) > button:nth-child(1)")
    .pause(3000)
    .click("#leftNav_updateProfile")
    .click("#leftNav_updateProfile > ul:nth-child(1) > li:nth-child(1) > a:nth-child(2)")
    .pause(2000)
    .click(".w150bt", function(err,res){
      console.log(res);
    })
    .pause(3000)
    .back()

    .refresh()
    .log('server')
    .log('driver','ALL')
    .emit('countme', "cnt")
    .pause(1000)
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    })
    .end();
