const express = require('express');
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/routes");

const app = express();
app.use(bodyParser.json());

//domains specifications
app.use("/user",usersRoutes);

//start the server
app.listen(8383, () => {
    console.log('app running localhost:8383')
})
