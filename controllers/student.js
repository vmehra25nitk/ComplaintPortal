const Student = require('../models/student');

// POST Methods

exports.addStudent = (req, res) => {
    const sid = req.body.sid;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const room = req.body.room;
    const branch = req.body.branch;
    const hostel = req.body.hostel;

    Student.create({
            sid: sid,
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            room: room,
            branch: branch,
            hostel: hostel
        }).then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
};

exports.updateStudent = (req, res) => {
    const sid = req.body.sid;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const room = req.body.room;
    const branch = req.body.branch;
    const hostel = req.body.hostel;

    Student.findAll({
            where: {
                sid: sid
            }
        })
        .then(student => {
            student[0].firstName = firstName;
            student[0].lastName = lastName;
            student[0].room = room;
            student[0].hostel = hostel;
            student[0].branch = branch;
            student[0].email = email;
            student[0].mobile = mobile;
            return student[0].save();
        })
        .then(result => {
            console.log('Updated Student');
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });

};


exports.deleteStudentById = (req, res) => {
    const sid = req.body.sid;
    Student.findByPk(sid)
        .then(student => {
            return student.destroy();
        })
        .then(result => {
            res.send('Deleted success');
        })
        .catch(err => {
            console.log(err);
        });
};







































// GET Methods

exports.getAllStudents = (req, res) => {
    Student.findAll()
        .then(students => {
            res.send(students);
        });
}

exports.getStudentById = (req, res) => {
    const sid = req.body.sid;
    Student.findAll({
            where: {
                sid: sid
            }
        })
        .then(result => {
            res.send(result[0]);
        })
        .catch(err => {
            res.send(err);
        })
}