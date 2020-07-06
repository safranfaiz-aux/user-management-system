const express = require('express');
const dbConfig = require("../db_config/connectionDB");

const Router = express.Router();

Router.get("/", (reqest, response) => {
    dbConfig.query("select * from users", (error, rows, fields) => {
        if (!error) {
            response.send(rows)
        } else {
            console.log("query error : ", error)
        }
    });
});

module.exports = Router;

