

const express = require('express');

const app = express();
const path = require("path")



//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;

// create the server

app.listen(port, () => console.log(`server is running on port ${port}`))


let studentResponses = [];
// 1. Show the exam.html page when the User hits the landing page('/')
app.get("/home",
    (req, res, next) => res.sendFile(path.join(__dirname, "html", "exam.html"))
);

//2. When User enters the data and clicks on the submit post to the ("/post") url

app.post("/post", (req, res, next) => {

    studentResponses.push(req.body.questionOne)
    studentResponses.push(req.body.questionTwo)
    console.log(studentResponses);
    res.send(JSON.stringify(studentResponses))
});


//3. Display '/preview' page with all the User entered details. 

app.get("/preview", (req, res, next) => {
    res.send(JSON.stringify(studentResponses));
});

console.log("Outsit " + studentResponses);












