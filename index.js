/*jshint esversion: 6 */

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

const studentRoutes = require('./routes/student');
const complaintRoutes = require('./routes/complaint');
const labRouter = require('./routes/lab');
const authStudentRoutes = require('./routes/authStudent');


const Complaint = require('./models/complaint');
const Student = require('./models/student');
const Lab = require('./models/lab');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(studentRoutes);
app.use(complaintRoutes);
app.use(labRouter);
app.use(authStudentRoutes);

app.get("/", function (req, res) {
    res.render("mainLogin", {
        pageTitle: "Home"
    })
    .catch(err => {
        console.log(err);
    })
});


Complaint.belongsTo(Student, {
    constraints: true,
    onDelete: 'CASCADE'
});
Student.hasMany(Complaint);
Complaint.hasOne(Lab);

sequelize.sync()
    .then(() => {
        app.listen(3000, function () {
            console.log("Server started at port 3000");
        });
    })
    .catch(err => {
        console.log(err);
    });