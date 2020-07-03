const express = require('express');

const PORT = process.env.PORT || 8585;

const app = express();

//start the server
app.listen(PORT, () => {
    console.log('app running localhost:8585')
})
