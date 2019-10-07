const Complaint = require('../models/complaint');
const Detector = require('./complaintTypeDetect/detector');

// CREATE 


exports.createComplaint = function (req, res)  {
    const cid = req.body.cid;
    const status = req.body.status;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const category = req.body.category;
    const description = req.body.description;
    const solvedBy = req.body.solvedBy;
    const studentSid = req.body.studentSid;
    const request = req.body;


    Complaint.create({
            cid: cid,
            startDate: startDate,
            status: status,
            endDate: endDate,
            category: category,
            description: description,
            solvedBy: solvedBy,
            studentSid: studentSid
        })
        .then(result => {
                console.log(req.body.category);

                var status = false;
                status = Detector.detect(req);
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



// UPDATE

exports.updateComplaint = (req, res) => {
    const cid = req.body.cid;
    const status = req.body.status;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const category = req.body.category;
    const description = req.body.description;
    const solvedBy = req.body.solvedBy;
    const studentSid = req.body.studentSid;


    Complaint.findByPk(cid)
        .then(complaint => {
            if (studentSid == complaint.studentSid) {
                return complaint.save();
            }
            complaint.cid = cid,
                complaint.startDate = startDate,
                complaint.status = status,
                complaint.endDate = endDate,
                complaint.category = category,
                complaint.description = description,
                complaint.solvedBy = solvedBy,
                complaint.studentSid = studentSid
            return complaint.save();
        })
        .then(result => {
            res.send('Updated Student');
        })
        .catch()
}




// DELETE

exports.deleteComplaintById = (req, res) => {
    const studentSid = req.body.studentSid;
    const cid = req.body.cid;
    Complaint.findByPk(cid)
        .then(complaint => {
            if (complaint.studentSid == studentSid) {
                return complaint.destroy();
            } else {
                res.send('Invalid Operation');
            }
        })
        .then(() => {
            res.send('Deleted successfully');
        })
        .catch(err => {
            res.send(err);
        })
};