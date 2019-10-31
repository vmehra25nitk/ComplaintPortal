const Complaint = require('../models/complaint');
const Hostel = require('../models/hostel');
const Fees = require('../models/fees');
const Faculty = require('../models/faculty');
const Lab = require('../models/lab');
const Library = require('../models/library');
const Mess = require('../models/mess');

const sequelize = require('sequelize');
const Op = sequelize.Op;


const ComplaintCreateDetector = require('./complaintTypeDetect/createComplaintDetector');

// CREATE 


exports.createComplaint = function (req, res)  {
    
    req.body.studentSid = req.session.sid;
    var complaintType = "";
    if(req.body.general === "personal"){
        complaintType = 'per';
    }else{
        complaintType = 'gen';
    }
    req.body.type = complaintType;
    req.body.cid = Date.now();
    req.body.startDate = req.body.cid;  req.body.endDate = req.body.startDate;
    req.body.status = "unsolved";
    req.body.solvedBy = '';

    const cid = req.body.cid;
    const status = req.body.status;
    const startDate = req.body.cid;
    const endDate = req.body.cid;
    const category = req.body.category;
    const description = req.body.description;
    const solvedBy = req.body.solvedBy;
    const studentSid = req.body.studentSid;
    const type = req.body.type;
    const request = req.body;

    console.log(req.body);

    Complaint.create({
            cid: cid,
            startDate: startDate,
            status: "pending",
            endDate: endDate,
            category: category,
            description: description,
            solvedBy: solvedBy,
            studentSid: studentSid,
            type: type
        })
        .then(result => {
            res.redirect('/');
                console.log(req.body.category);

                var status = false;
                status = ComplaintCreateDetector.detect(req);
                console.log("status = ",status);
                if(status)
                res.send('Added Successfuly\n'+result);

                else {
                Complaint.findByPk(cid)
                    .then(complaint => {
                        if (complaint.studentSid == studentSid) {
                            return complaint.destroy();
                        } else {
                            res.send('Invalid Operation');
                        }
                    })
                    .then(() => {
                        res.send('Invalid Complaint category');
                    })
                    .catch(err => {
                        res.send(err);
                    })
                }
        })
        .catch(err => {
            res.send(err);
        })
};


// READ

exports.readAllComplaint = (req, res) => {
    var type='gen';
    var result = [],
        result1 = [];

        Complaint.findAll({
                where: {
                    type: type,
                   
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
                                                        
                                                        res.send(finalResult);
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
};


// UPDATE

