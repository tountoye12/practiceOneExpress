

const express = require('express');





const app = express();



//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({urlencoded:false}));

const port = 3000;

// create the server

app.listen(port, () => console.log(`server is running on port ${port}`))














