const mysql = require("mysql");
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"user_management"
});

mysqlConnection.connect( (error)=>{
    if(!error){
        console.log("Connected : MYSQL");
    }else{
        console.log("Connection Failed : MYSQL");
    }

} );


//start the server
app.listen(8383, () => {
    console.log('app running localhost:8585')
})
