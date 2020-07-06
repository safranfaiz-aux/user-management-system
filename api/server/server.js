const express = require('express');
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/routes");
const dbConfig = require("./db_config/connectionDB");

const app = express();
app.use(bodyParser.json());

app.use("/all",usersRoutes);

//start the server
app.listen(8383, () => {
    console.log('app running localhost:8383')
})
