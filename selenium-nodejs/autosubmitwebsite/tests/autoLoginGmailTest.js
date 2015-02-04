var emailId  = process.argv[2],
password = process.argv[3],
browserName = process.argv[4],

client = require('webdriverio').remote({
  desiredCapabilities: {
    browserName: browserName || 'phantomjs'
  }
});


client.init()
.url('http://gmail.com')
.pause(10000)
.saveScreenshot("./GmailBeforeLoginSnapShot.png", function(err,screenshot, res){
  console.log(err);
})
.setValue("#Email",emailId)
.setValue("#Passwd",password)
.click("#signIn")
.pause(5000)
.saveScreenshot("./GmailAfterLoginSnapShot.png", function(err,screenshot, res){
  console.log(err);
})
.sessions(function(err, sessions) {
  console.log(1, sessions);
})
.endAll()
.sessions(function(err, sessions) {
  console.log(2, sessions);
});
