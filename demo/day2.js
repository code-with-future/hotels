var fs = require("fs");
var os = require("os");
var _ = require('lodash');
var user = os.userInfo();
console.log(user);
fs.appendFile("demo.txt", "welcome " + user.username + "!\n", () => {
  console.log("file created");
});

var data = ['vanshi','dishu','jassi','kartik',98,45,64,34,21,21,34,64,'vanshi'];
var filter = _.uniq(data);
console.log(filter);
 