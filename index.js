const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

const studentRoutes = require('./routes/student');
const complaintRoutes = require('./routes/complaint');
const labRouter = require('./routes/lab');


const Complaint = require('./models/complaint');
const Student = require('./models/student');
const Lab = require('./models/lab');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(studentRoutes);
app.use(complaintRoutes);
app.use(labRouter);


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