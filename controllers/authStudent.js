/*jshint esversion: 6 */

const Student = require('../models/authStudent');
const Complaint = require('../models/complaint');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');


const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key:process.env.sendGridApiKey
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

    if(req.session.isLoggedIn && req.session.isStudent){
        res.redirect('/studentHomePage');
    }else if(req.session.isLoggedIn && req.session.isAdmin){
        res.redirect('/adminHomePage');
    }

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
                        res.redirect('/studentSignIn')
                    })
                    .catch(err => {
                        res.redirect('/studentSignUp')
                        res.send(err);
                    });
            });
    }

};








// Sign In

exports.signIn = (req, res) => {
    const sid = req.body.sid;
    const password = req.body.password;

    if(req.session.isLoggedIn && req.session.isStudent){
        res.redirect('/studentHomePage');
    }

    Student.findByPk(sid)
        .then(student => {
            bcrypt.compare(password, student.password)
                .then(isSame => {
                    if (isSame) {
                        console.log('ok');
                        req.session.isLoggedIn = true;
                        req.session.isStudent = true;
                        req.session.isAdmin = false;
                        req.session.sid = sid;
                        req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
                        console.log(req.session);
                        res.redirect('/studentHomePage');
                    } else {
                        alert('Incorrect Password');
                        res.redirect('/studentSignIn');
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/studentSignIn');
                });
        })
        .catch(err => {
            res.redirect('/studentSignIn');
            res.send(err);
        });


};


exports.getStudentSignIn = (req, res) => {
    if(req.session.isLoggedIn && req.session.isStudent){
        res.redirect('/studentHomePage');
    }else{
        res.render('signInStudent', {
            pageTitle: "Sign In"
        });
    }
    
};  


exports.getStudentSignUp = (req, res) => {
    if(req.session.isLoggedIn && req.session.isStudent){
        res.redirect('/studentHomePage');
    }else{
        res.render("signUpStudent", {
            pageTitle: "Sign Up"
        });
    }
}

exports.getStudentHomePage = (req, res) => {
    if(req.session.isLoggedIn && req.session.isStudent){
        res.render('home');
    }else{
        console.log('here');
        res.redirect('/studentSignIn');
    }
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



exports.getStudentPendingComplaint = (req, res) => {
    const sid = req.body.sid;
    Student.findByPk(sid)
    .then(() => {
        Complaint.findAll({
            include: [
                {
                    studentSid: sid
                }
            ]
        })
        .then({

        });
    });
}

exports.signOutStudent = (req, res) => {
    const sid = req.session.sid;
    req.session.destroy();
    console.log(req.session);
    res.redirect('/studentSignIn');
}