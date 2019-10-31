const Complaint = require('../models/complaint');
const Hostel = require('../models/hostel');
const Fees = require('../models/fees');
const Faculty = require('../models/faculty');
const Lab = require('../models/lab');
const Library = require('../models/library');
const Mess = require('../models/mess');


const sequelize = require('sequelize');
const Op = sequelize.Op;

// STUDENT FUNCTIONS //

exports.getStudentComplaints = (req, res) => {
    const category = req.body.category;
    const type = req.body.type;
    if (type === 'gen') {
        if (category === 'all') {
            Complaint.findAll({
                    where: {
                        type: 'gen'
                    }
                })
                .then(complaints => {
                    res.send(complaints);
                })
                .catch(err => {
                    res.send(err);
                })
        } else {
            Complaint.findAll({
                    where: {
                        type: type,
                        category: category
                    }
                })
                .then(complaints => {
                    res.send(complaints);
                })
                .catch(err => {
                    res.redirect('/');
                })
        }
    } else {
        if (category === 'all') {
            const type = req.body.type;
            const studentSid = req.session.sid;
            Complaint.findAll({
                    where: {
                        type: type,
                        studentSid: studentSid
                    }
                })
                .then(complaints => {
                    res.send(complaints);
                })
                .catch(err => {
                    res.redirect('/');
                })
        } else {
            const type = req.body.type;
            const studentSid = req.session.sid;
            const category = req.body.category;
            Complaint.findAll({
                    where: {
                        type: type,
                        studentSId : {[Op.like] : studentSid },
                        category: category
                    }
                })
                .then(complaints => {
                    res.send(complaints);
                })
                .catch(err => {
                    res.redirect('/');
                })
        }
    }
}

// STUDENT COMPLAINTS END HERE //


// ADMIN COMPLAINTS //

exports.getAdminComplaints = (req, res) => {
    const category = req.body.category;
    const type = req.body.type;
    if (type === 'gen') {
        if (category === 'all') {
            Complaint.findAll({
                    where: {
                        type: 'gen'
                    }
                })
                .then(complaints => {
                    res.send(complaints);
                })
                .catch(err => {
                    res.redirect('/');
                })
        } else {
            Complaint.findAll({
                    where: {
                        type: type,
                        category: category
                    }
                })
                .then(complaints => {
                    console.log(complaints);
                    res.send(complaints);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        }
    } else {
        if (category === 'all') {
            Complaint.findAll({
                    where: {
                        type: 'per'
                    }
                })
                .then(complaints => {
                    res.send(complaints);
                })
                .catch(err => {
                    res.redirect('/');
                })
        } else {
            const category = req.body.category;
            const type = req.body.type;
            Complaint.findAll({
                    where: {
                        type: type,
                        category: category
                    }
                })
                .then(complaints => {
                    res.send(complaints);
                })
                .catch(err => {
                    res.redirect('/');
                })
        }
    }
}

// ADMIN COMPLAINTS END HERE //

exports.displayComplaint = (req, res) => {
    if (req.session.isLoggedIn && (req.session.isStudent || req.session.isAdmin)) {
        if (req.session.isStudent) {
            res.redirect('/getStudentComplaints');
        } else {
            res.redirect('/getAdminComplaints');
        }
    } else {
        return null;
    }
}












exports.getComplaintByCategoryStudent = (req, res) => {
    const category = req.body.category;
    const type = req.body.type;
    var studentSid = req.body.sid;
    const status = req.body.status;
    if (req.session.sid) {
        studentSid = req.session.sid;
    }
    if(type=='gen')
    studentSid="%";
    var fromDate =(req.body.fromDate);
    var toDate = (req.body.toDate);

    // var day = fromDate.getDay(),
    //     month = fromDate.getMonth(),
    //     year = fromDate.getFullYear();
    // fromDate = new Date(year, month, day);
    // day = toDate.getDay();
    // month = toDate.getMonth();
    // year = toDate.getFullYear();
    // toDate = new Date(year, month, day);


    if (category === 'all') {
        var result = [],
            result1 = [];
        Complaint.findAll({
                where: {
                    studentSId : {[Op.like] : studentSid },
                    type: type,
                    status: status
                },
                include: [{
                    model: Hostel,
                    attributes: ['type', 'name'],
                    required: true
                }]
            })
            .then(complaints1 => {
                result1.push(complaints1);
                result = result.concat(result1);
                result1 = [];
                Complaint.findAll({
                        where: {
                            studentSId : {[Op.like] : studentSid },
                            type: type,
                            status: status
                        },
                        include: [{
                            model: Library,
                            attributes: ['type'],
                            required: true
                        }]
                    })
                    .then(complaints2 => {
                        result1.push(complaints2);
                        result = result.concat(result1);
                        result1 = [];
                        Complaint.findAll({
                                where: {
                                    studentSId : {[Op.like] : studentSid },
                                    type: type,
                                    status: status
                                },
                                include: [{
                                    model: Lab,
                                    attributes: ['type', 'name', 'department'],
                                    required: true
                                }]
                            })
                            .then(complaints3 => {
                                result1.push(complaints3);
                                result = result.concat(result1);
                                result1 = [];
                                Complaint.findAll({
                                        where: {
                                            studentSId : {[Op.like] : studentSid },
                                            type: type,
                                            status: status
                                        },
                                        include: [{
                                            model: Mess,
                                            attributes: ['type', 'messName'],
                                            required: true
                                        }]
                                    })
                                    .then(complaints4 => {
                                        result1.push(complaints4);
                                        result = result.concat(result1);
                                        result1 = [];
                                        Complaint.findAll({
                                                where: {
                                                    studentSId : {[Op.like] : studentSid },
                                                    type: type,
                                                    status: status
                                                },
                                                include: [{
                                                    model: Faculty,
                                                    attributes: ['type', 'name', 'department'],
                                                    required: true
                                                }]
                                            })
                                            .then(complaints5 => {
                                                result1.push(complaints5);
                                                result = result.concat(result1);
                                                result1 = [];
                                                Complaint.findAll({
                                                        where: {
                                                            studentSId : {[Op.like] : studentSid },
                                                            type: type,
                                                            status: status
                                                        },
                                                        include: [{
                                                            model: Fees,
                                                            attributes: ['type'],
                                                            required: true
                                                        }]
                                                    })
                                                    .then(complaints6 => {
                                                        result1.push(complaints6);
                                                        result = result.concat(result1);
                                                        result1 = [];
                                                        var r0 = result[0];
                                                        var r1 = result[1];
                                                        var r2 = result[2];
                                                        var r3 = result[3];
                                                        var r4 = result[4];
                                                        var r5 = result[5];
                                                        var finalResult = r0.concat(r1);
                                                        finalResult = finalResult.concat(r2);
                                                        finalResult = finalResult.concat(r3);
                                                        finalResult = finalResult.concat(r4);
                                                        finalResult = finalResult.concat(r5);
                                                        var tmp = [];
                                                        for (i = 0; i < finalResult.length; i++) {
                                                           
                                                            if (finalResult[i].startDate >= new Date(fromDate) && finalResult[i].startDate <= new Date(toDate)) {
                                                                tmp.push(finalResult[i]);
                                                                console.log(finalResult[i]);
                                                            }
                                                        }
                                                        res.send(tmp);
                                                    })
                                            })
                                    })
                            })
                    })
            })
    } else {
        if (category === 'hostel') {
            Complaint.findAll({
                    where: {
                        studentSId : {[Op.like] : studentSid },
                        type: type,
                        category: category,
                        status: status
                    },
                    include: [{
                        model: Hostel,
                        attributes: ['type', 'name'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        console.log("Number of Complaints - "+complaints.length+"  "+complaints[i].startDate+"  "+ new Date(fromDate)+"  "+new Date(toDate));
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'lab') {
            Complaint.findAll({
                    where: {
                        studentSId : {[Op.like] : studentSid },
                        type: type,
                        category: category,
                        status: status
                    },
                    include: [{
                        model: Lab,
                        attributes: ['type', 'name', 'department'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'library') {
            Complaint.findAll({
                    where: {
                        studentSId : {[Op.like] : studentSid },
                        type: type,
                        category: category,
                        status: status
                    },
                    include: [{
                        model: Library,
                        attributes: ['type'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'faculty') {
            Complaint.findAll({
                    where: {
                        studentSId : {[Op.like] : studentSid },
                        type: type,
                        category: category,
                        status: status
                    },
                    include: [{
                        model: Faculty,
                        attributes: ['type', 'name', 'department'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'fees') {
            Complaint.findAll({
                    where: {
                        studentSId : {[Op.like] : studentSid },
                        type: type,
                        category: category,
                        status: status
                    },
                    include: [{
                        model: Fees,
                        attributes: ['type'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'mess') {
            Complaint.findAll({
                    where: {
                        studentSId : {[Op.like] : studentSid },
                        type: type,
                        category: category,
                        status: status
                    },
                    include: [{
                        model: Mess,
                        attributes: ['type', 'messName'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        }

    }
}



























exports.getComplaintByCategoryAdmin = (req, res) => {
    const category = req.body.category;
    const type = req.body.type;
    var result = [],
        result1 = [];
    var status = req.body.status;
    var fromDate = req.body.fromDate;
    var toDate = req.body.toDate;


    if (category === 'all') {
        Complaint.findAll({
                where: {
                    type: type,
                    status: status
                },
                include: [{
                    model: Hostel,
                    attributes: ['type', 'name'],
                    required: true
                }]
            })
            .then(complaints1 => {
                result1.push(complaints1);
                result = result.concat(result1);
                result1 = [];
                Complaint.findAll({
                        where: {
                            type: type,
                            status: status
                        },
                        include: [{
                            model: Fees,
                            attributes: ['type'],
                            required: true
                        }]
                    })
                    .then(complaints2 => {
                        result1.push(complaints2);
                        result = result.concat(result1);
                        result1 = [];
                        Complaint.findAll({
                                where: {
                                    type: type,
                                    status: status
                                },
                                include: [{
                                    model: Faculty,
                                    attributes: ['type', 'name', 'department'],
                                    required: true
                                }]
                            })
                            .then(complaints3 => {
                                result1.push(complaints3);
                                result = result.concat(result1);
                                result1 = [];
                                Complaint.findAll({
                                        where: {
                                            type: type,
                                            status :status
                                        },
                                        include: [{
                                            model: Lab,
                                            attributes: ['type', 'name', 'department'],
                                            required: true
                                        }]
                                    })
                                    .then(complaints4 => {
                                        result1.push(complaints4);
                                        result = result.concat(result1);
                                        result1 = [];
                                        Complaint.findAll({
                                                where: {
                                                    type: type,
                                                    status: status
                                                },
                                                include: [{
                                                    model: Library,
                                                    attributes: ['type'],
                                                    required: true
                                                }]
                                            })
                                            .then(complaints5 => {
                                                result1.push(complaints5);
                                                result = result.concat(result1);
                                                result1 = [];
                                                Complaint.findAll({
                                                        where: {
                                                            type: type,
                                                            status: status
                                                        },
                                                        include: [{
                                                            model: Mess,
                                                            attributes: ['type', 'messName'],
                                                            required: true
                                                        }]
                                                    })
                                                    .then(complaints6 => {
                                                        result1.push(complaints6);
                                                        result = result.concat(result1);
                                                        result1 = [];
                                                        var r0 = result[0];
                                                        var r1 = result[1];
                                                        var r2 = result[2];
                                                        var r3 = result[3];
                                                        var r4 = result[4];
                                                        var r5 = result[5];
                                                        var finalResult = r0.concat(r1);
                                                        finalResult = finalResult.concat(r2);
                                                        finalResult = finalResult.concat(r3);
                                                        finalResult = finalResult.concat(r4);
                                                        finalResult = finalResult.concat(r5);
                                                        var tmp = [];
                                                        console.log(finalResult.length);
                                                        for (i = 0; i < finalResult.length; i++) {
                                                            console.log(finalResult[i].startDate+"  "+new Date(fromDate)+"  "+new Date(toDate));
                                                            if (finalResult[i].startDate >= new Date(fromDate) && finalResult[i].startDate <= new Date(toDate)) {
                                                                tmp.push(finalResult[i]);
                                                                console.log(finalResult[i]);
                                                            }
                                                        }
                                                        res.send(tmp);
                                                    })
                                            })
                                    })
                            })
                    })
            })
            .catch(err => {
                console.log(err);
                res.redirect('/');
            })
    } else {
        if (category === 'hostel') {
            Complaint.findAll({
                    where: {
                        category: category,
                        type: type,
                        status: status
                    },
                    include: {
                        model: Hostel,
                        attributes: ['type', 'name'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'lab') {
            Complaint.findAll({
                    where: {
                        category: category,
                        type: type,
                        status: status
                    },
                    include: {
                        model: Lab,
                        attributes: ['type', 'name', 'department'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'library') {
            Complaint.findAll({
                    where: {
                        category: category,
                        type: type,
                        status: status
                    },
                    include: {
                        model: Library,
                        attributes: ['type'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'faculty') {
            Complaint.findAll({
                    where: {
                        category: category,
                        type: type,
                        status: status
                    },
                    include: {
                        model: Faculty,
                        attributes: ['type', 'name', 'department'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);

                    res.redirect('/');
                })
        } else if (category === 'fees') {
            Complaint.findAll({
                    where: {
                        category: category,
                        type: type,
                        status: status
                    },
                    include: {
                        model: Lab,
                        attributes: ['type'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'mess') {
            Complaint.findAll({
                    where: {
                        category: category,
                        type: type,
                        status: status
                    },
                    include: {
                        model: Mess,
                        attributes: ['type', 'messName'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                       
                        if (complaints[i].startDate >= new Date(fromDate) && complaints[i].startDate <= new Date(toDate)) {
                            tmp.push(complaints[i]);
                            console.log(complaints[i]);
                        }
                    }
                    res.send(tmp);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        }
    }
}

exports.getStatistics = (req, res) => {
    var result = [];
    Complaint.findAll({
        where: {
            status: 'rejected'
        }
    })
    .then(complaintRejected => {
        result.push(complaintRejected.length);
        Complaint.findAll({
            where: {
                status: 'pending'
            }
        })
        .then(complaintPending => {
            result.push(complaintPending.length);
            Complaint.findAll({
                where: {
                    status: 'solved'
                }
            })
            .then(complaintSolved => {
                result.push(complaintSolved.length);
                console.log(result);
                var sum = result[0] + result[1] + result[2];
                var p1 = result[0] / sum * 100.0;   result[0] = p1;
                var p2 = result[1] / sum * 100.0;   result[1] = p2;
                var p3 = result[2] / sum * 100.0;   result[2] = p3;
                res.send(result);
            })
        })
    })
}