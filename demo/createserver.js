const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/pizza',(req,res)=>{
  res.send('your pizza is ready');
})

app.listen(3000)