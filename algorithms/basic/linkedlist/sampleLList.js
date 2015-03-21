var LList = require('./LList.js');

var cities = new LList();
cities.insert("Conway","head");
cities.insert("Russellville","Conway");
cities.insert("Alma","Russellville");
cities.display();


var cities1 = new LList();
    cities1.insert("Conway","head");
    cities1.insert("Russellville","Conway");
    cities1.insert("Carlisle","Russellville");
    cities1.insert("Alma","Carlisle");
    console.log();
    cities1.display();
    console.log();
    cities1.remove("Carlisle");
    cities1.display();	