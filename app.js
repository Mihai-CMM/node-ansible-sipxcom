var express = require('express')
var ansible=require('./ansible.js')
var app = express()
var path = require('path');



//Start Express
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})




app.use(express.static(path.join(__dirname, '/public')));

//Intial landing page


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});






// Start ansible.js NodeJS script to build a sipxcom on AWS
app.post('/aws', function (req, res) {
  console.log ('Creating AWS machine')
  res.send('Executing Ansible Script!')
  ansible.addMachine()
})


app.delete('/aws', function (req, res) {
  console.log ('Terminating AWS machine')
  res.send('Terminating Ansible Script!')
  ansible.terminateMachine()
})


app.put('/aws', function (req, res) {
  console.log ('Stopping AWS machine')
  res.send('Stopping AWS machine!')
  ansible.stopMachine()
})

app.get('/aws', function (req, res) {
  console.log ('Listing AWS machines')
  res.send('Geting machines!')
  ansible.listMachines()
})
