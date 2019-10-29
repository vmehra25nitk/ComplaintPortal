const Complaint = require('../models/complaint');
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
            res.send(result);
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