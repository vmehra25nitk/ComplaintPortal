/*jshint esversion: 6 */

const Student = require('../models/authStudent');

const bcrypt = require('bcryptjs');


// Sign Up

exports.signUp = (req, res) => {
    const sid = req.body.sid;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const room = req.body.room;
    const branch = req.body.branch;
    const hostel = req.body.hostel;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password.localeCompare(confirmPassword) != 0) {
        res.redirect('/studentSignUp');
    } else {
        bcrypt.hash(password, 12)
            .then(hashedPassword => {
                Student.create({
                        sid: sid,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        mobile: mobile,
                        room: room,
                        branch: branch,
                        hostel: hostel,
                        password: hashedPassword
                    }).then(result => {
                        res.send(result);
                    })
                    .catch(err => {
                        res.send(err);
                    });
            });
    }

};








// Sign In

exports.signIn = (req, res) => {
    const sid = req.body.sid;
    const password = req.body.password;

    Student.findByPk(sid)
        .then(student => {
            bcrypt.compare(password, student.password)
                .then(isSame => {
                    if (isSame) {
                        console.log('ok');
                        res.send('OK');
                    } else {
                        console.log('Incorrect Password');
                        res.send('Incorrect Password');
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/studentSignIn');
                });
        })
        .catch(err => {
            res.send(err);
        });


};
