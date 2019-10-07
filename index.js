/*jshint esversion: 6 */

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

const studentRoutes = require('./routes/student');
const complaintRoutes = require('./routes/complaint');
const authStudentRoutes = require('./routes/authStudent');




app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(studentRoutes);
app.use(complaintRoutes);
app.use(authStudentRoutes);

app.get("/", function (req, res) {
    res.render("mainLogin", {
        pageTitle: "Home"
    })
    .catch(err => {
        console.log(err);
    })
});




sequelize.sync({force:true})
    .then(() => {
        app.listen(3000, function () {
            console.log("Server started at port 3000");
        });
    })
    .catch(err => {
        console.log(err);
    });