const Complaint = require('../models/complaint');

// create 

exports.createComplaint = (req, res) => {
    const cid = req.body.cid;
    const status = req.body.status;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const category = req.body.category;
    const description = req.body.description;
    const solvedBy = req.body.solvedBy;
    const studentSid = req.body.studentSid;

    Complaint.create({
        cid: cid,
        startDate: startDate,
        status: status,
        endDate: endDate,
        category: category,
        description: description,
        solvedBy: solvedBy,
        studentSid: studentSid
    }).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
};


// read

exports.readAllComplaint = (req, res) => {
    const sid = req.body.sid;
    Complaint.findAll({
            where: {
                studentSid: sid
            }
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
};

exports.readComplaintByCategory = (req, res) => {
    const sid = req.body.sid;
    const category = req.body.category;
    Complaint.findAll({
            where: {
                studentSid: sid,
                category: category
            }
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
}



// update

// delete