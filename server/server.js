var mysql = require('mysql');
//////////////////////////////
var db_config = {
  host: "us-cdbr-east-06.cleardb.net",
  user: "be8afdb670f4c6",
  password:"b0cd0b99",
  database: "heroku_59117959c6d6ee7"
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();
//////////////////////////////
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
app.get('/getT_IDandPass', (req, res) => {
  connection.query("SELECT T_ID,T_password FROM teacher", function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
})
app.get('/getS_IDandPass', (req, res) => {
  connection.query("SELECT I_ID,I_password FROM internshipstaff", function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
})
app.get('/getAllStudents', (req, res) => {
  connection.query("SELECT S_ID,S_name,S_major FROM student", function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
})
app.get('/getAllTeachers', (req, res) => {
  connection.query("SELECT T_ID,T_name,T_major FROM teacher", function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
})
app.listen(5010, () => {
  console.log('Start server at port 5010.')
})