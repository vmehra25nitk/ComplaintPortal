const Complaint = require('../models/complaint');
const Hostel = require('../models/hostel');
const Fees = require('../models/fees');
const Faculty = require('../models/faculty');
const Lab = require('../models/lab');
const Library = require('../models/library');
const Mess = require('../models/mess');


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
                        studentSid: studentSid,
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
    const studentSid = req.body.sid;
    if (req.session.sid) {
        studentSid = req.session.sid;
    }
    var fromDate = new Date(req.body.fromDate);
    var toDate = new Date(req.body.toDate);

    var day = fromDate.getDay(),
        month = fromDate.getMonth(),
        year = fromDate.getFullYear();
    fromDate = new Date(year, month, day);
    day = toDate.getDay();
    month = toDate.getMonth();
    year = toDate.getFullYear();
    toDate = new Date(year, month, day);


    if (category === 'all') {
        var result = [],
            result1 = [];
        Complaint.findAll({
                where: {
                    studentSid: studentSid,
                    type: type
                },
                include: [{
                    model: Hostel,
                    attributes: ['type'],
                    required: true
                }]
            })
            .then(complaints1 => {
                result1.push(complaints1);
                result = result.concat(result1);
                result1 = [];
                Complaint.findAll({
                        where: {
                            studentSid: studentSid,
                            type: type
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
                                    studentSid: studentSid,
                                    type: type
                                },
                                include: [{
                                    model: Lab,
                                    attributes: ['type'],
                                    required: true
                                }]
                            })
                            .then(complaints3 => {
                                result1.push(complaints3);
                                result = result.concat(result1);
                                result1 = [];
                                Complaint.findAll({
                                        where: {
                                            studentSid: studentSid,
                                            type: type
                                        },
                                        include: [{
                                            model: Mess,
                                            attributes: ['type'],
                                            required: true
                                        }]
                                    })
                                    .then(complaints4 => {
                                        result1.push(complaints4);
                                        result = result.concat(result1);
                                        result1 = [];
                                        Complaint.findAll({
                                                where: {
                                                    studentSid: studentSid,
                                                    type: type
                                                },
                                                include: [{
                                                    model: Faculty,
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
                                                            studentSid: studentSid,
                                                            type: type
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
                                                            var day = finalResult[i].startDate.getDay(),
                                                                month = finalResult[i].startDate.getMonth(),
                                                                year = finalResult[i].startDate.getFullYear();
                                                            finalResult[i].startDate = new Date(year, month, day);
                                                            if (finalResult[i].startDate >= fromDate && finalResult[i].startDate <= toDate) {
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
                        studentSid: studentSid,
                        type: type,
                        category: category
                    },
                    include: [{
                        model: Hostel,
                        attributes: ['type'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        studentSid: studentSid,
                        type: type,
                        category: category
                    },
                    include: [{
                        model: Lab,
                        attributes: ['type'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        studentSid: studentSid,
                        type: type,
                        category: category
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
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        studentSid: studentSid,
                        type: type,
                        category: category
                    },
                    include: [{
                        model: Faculty,
                        attributes: ['type'],
                        required: true
                    }]
                })
                .then(complaints => {
                    res.send(complaints);
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                })
        } else if (category === 'fees') {
            Complaint.findAll({
                    where: {
                        studentSid: studentSid,
                        type: type,
                        category: category
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
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        studentSid: studentSid,
                        type: type,
                        category: category
                    },
                    include: [{
                        model: Mess,
                        attributes: ['type'],
                        required: true
                    }]
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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

    var fromDate = new Date(req.body.fromDate);
    var toDate = new Date(req.body.toDate);

    var day = fromDate.getDay(),
        month = fromDate.getMonth(),
        year = fromDate.getFullYear();
    fromDate = new Date(year, month, day);
    day = toDate.getDay();
    month = toDate.getMonth();
    year = toDate.getFullYear();
    toDate = new Date(year, month, day);


    if (category === 'all') {
        Complaint.findAll({
                where: {
                    type: type
                },
                include: [{
                    model: Hostel,
                    attributes: ['type'],
                    required: true
                }]
            })
            .then(complaints1 => {
                result1.push(complaints1);
                result = result.concat(result1);
                result1 = [];
                Complaint.findAll({
                        where: {
                            type: type
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
                                    type: type
                                },
                                include: [{
                                    model: Faculty,
                                    attributes: ['type'],
                                    required: true
                                }]
                            })
                            .then(complaints3 => {
                                result1.push(complaints3);
                                result = result.concat(result1);
                                result1 = [];
                                Complaint.findAll({
                                        where: {
                                            type: type
                                        },
                                        include: [{
                                            model: Lab,
                                            attributes: ['type'],
                                            required: true
                                        }]
                                    })
                                    .then(complaints4 => {
                                        result1.push(complaints4);
                                        result = result.concat(result1);
                                        result1 = [];
                                        Complaint.findAll({
                                                where: {
                                                    type: type
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
                                                            type: type
                                                        },
                                                        include: [{
                                                            model: Mess,
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
                                                            var day = finalResult[i].startDate.getDay(),
                                                                month = finalResult[i].startDate.getMonth(),
                                                                year = finalResult[i].startDate.getFullYear();
                                                            finalResult[i].startDate = new Date(year, month, day);
                                                            if (finalResult[i].startDate >= fromDate && finalResult[i].startDate <= toDate) {
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
                        type: type
                    },
                    include: {
                        model: Hostel,
                        attributes: ['type'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        type: type
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
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        type: type
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
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        type: type
                    },
                    include: {
                        model: Faculty,
                        attributes: ['type'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        type: type
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
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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
                        type: type
                    },
                    include: {
                        model: Mess,
                        attributes: ['type'],
                        required: true
                    }
                })
                .then(complaints => {
                    var tmp = [];
                    for (i = 0; i < complaints.length; i++) {
                        var day = complaints[i].startDate.getDay(),
                            month = complaints[i].startDate.getMonth(),
                            year = complaints[i].startDate.getFullYear();
                        complaints[i].startDate = new Date(year, month, day);
                        if (complaints[i].startDate >= fromDate && complaints[i].startDate <= toDate) {
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