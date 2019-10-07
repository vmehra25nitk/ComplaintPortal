/*jshint esversion: 6 */

const Student = require('../models/authStudent');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');


const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key:'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'
    }
}));


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
                        transporter.sendMail({
                            to: email,
                            from: 'complaintPortal@nodejs.com',
                            subject: 'SignUp Succeeded',
                            html: '<h1>You are signed up</h1>'
                        }).then(() => {
                            res.redirect('/studentSignUp');
                        })
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
                        req.session.isLoggedIn = true;
                        req.session.isStudent = true;
                        req.session.isAdmin = false;
                        req.session.cookie.maxAge = 60 * 60 * 24;
                        console.log(req.session);
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


exports.getStudentSignIn = (req, res) => {
    res.render('signInStudent', {
        pageTitle: "Sign In"
    });
};  


exports.getStudentSignUp = (req, res) => {
    res.render("signUpStudent", {
        pageTitle: "Sign Up"
    });
}


// Reset Password

exports.getResetStudentPassword = (req, res) => {
    res.render('resetPassword', {
        pageTitle: "Reset Password"
    });

};


exports.postResetStudentPassword = (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if(err){
            res.send(err);
        }else{
            const token = buffer.toString('hex');
            const sid = req.body.sid;
            const email = req.body.email;
            Student.findByPk(sid)
            .then(student => {
                if(!student){
                    res.redirect('/studentResetPassword');
                }else if(student.email != email){
                    res.redirect('/studentResetPassword');
                }else{
                    student.resetToken = token;
                    student.resetTokenExpiration = Date.now() + 36 * 1000 * 100;
                    return student.save();
                }
            })
            .then(result => {
                transporter.sendMail({
                    to: req.body.email,
                    from: 'complaintPortal@nodejs.com',
                    subject: 'Change Password',
                    html: `
                        <p>You requested password reset</p>
                        <p> Click here <a href = "http://localhost:3000/studentResetPassword/${token}">link</a>
                    `
                }).then(() => {
                    res.redirect('/studentSignUp');
                })
            })
            .catch(err => {
                console.log(err);
            })
            
        }
    })
};  
