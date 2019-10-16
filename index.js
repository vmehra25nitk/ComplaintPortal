/*jshint esversion: 6 */

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const crypto = require('crypto');

const sequelize = require('./util/database');

const app = express();

const studentRoutes = require('./routes/student');
const complaintRoutes = require('./routes/complaint');
const authStudentRoutes = require('./routes/authStudent');

const labRoutes = require('./routes/lab');
const facultyRoutes = require('./routes/faculty');
const messRoutes = require('./routes/mess');
const feesRoutes = require('./routes/fees');
const hostelRoutes = require('./routes/hostel');
const libraryRoutes = require('./routes/library');
const testRoutes = require('./routes/test');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.use(session({
    secret: 'thisisarandomtext',
    resave: false,
    saveUninitialized: false,
    maxAge: 60
}));
app.use(studentRoutes);
app.use(complaintRoutes);
app.use(authStudentRoutes);
app.use(labRoutes);
app.use(facultyRoutes);
app.use(messRoutes);
app.use(feesRoutes);
app.use(hostelRoutes);
app.use(libraryRoutes);
app.use(testRoutes);


app.get("/", function (req, res) {
    if(req.session.isLoggedIn){
        if(req.session.isStudent){
            res.send('Logged in as Student');
        }else{
            res.send('Logged in as Admin');
        }
    }else{
        res.render("mainLogin", {
            pageTitle: "Home"
        })
    }
    
});




sequelize.sync() //{force:true})
    .then(() => {
        app.listen(3000, function () {
            console.log("Server started at port 3000");
        });
    })
    .catch(err => {
        console.log(err);
    });