const express = require('express');
const dbConfig = require("../db_config/connectionDB");
const { request, response } = require('express');

const Router = express.Router();

Router.get("/all", (request, response) => {
    dbConfig.query("select * from users", (error, result) => {
        if (!error) {
            response.json(result);
        } else {
            console.log("fetch all data error : ", error)
        }
    });
});

Router.post("/addUser", (request, response) => {
    console.log("request >>> ", request.body);
    let fName = request.body.fName;
    let lName = request.body.lName;
    let email = request.body.email;
    let password = request.body.password;
    let status = "1";
    
    dbConfig.query("insert into users ( first_name, last_name, email, password, status) values ( '"+fName+"','"+lName+"','"+email+"','"+password+"','"+status+"')",
        (err, result) => {
            if (!err) {
                result.status = "success"
                response.json(result);
            } else {
                console.log("data insertion error : "+err)
                response.json(err);
            }
        });
});

module.exports = Router;

