var mysql = require('mysql');
var con = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "be8afdb670f4c6",
  password:"b0cd0b99",
  database: "heroku_59117959c6d6ee7"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
//////////////////////////////
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
app.get('/getIDandPass', (req, res) => {
  con.query("SELECT I_ID,I_password FROM internshipstaff", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})
app.get('/getAllStudents', (req, res) => {
  con.query("SELECT * FROM student", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})
app.listen(5010, () => {
  console.log('Start server at port 5010.')
})