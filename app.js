var express = require('express')
var ansible=require('./ansible.js')
var app = express()
var path = require('path');
//var startAWS = require('ansible.js')

console.log('start');
//Start Express
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


//Intial landing page
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});






// Start ansible.js NodeJS script to build a sipxcom on AWS
app.get('/execute', function (req, res) {
  console.log ('A intrat aici')
  res.send('Executing Ansible Script!')
  ansible.action()
})
