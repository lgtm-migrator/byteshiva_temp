var webdriverio = require('webdriverio');
var options = {
     desiredCapabilities: {
            browserName: 'firefox'
    }
};

var client = webdriverio.remote(options);

client
    .init()
    .url('http://localhost:8000/index.html')
    .setValue('.inputs',"das", function() {
         client
              .getTitle();

     });
