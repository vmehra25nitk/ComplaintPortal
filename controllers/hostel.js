const Hostel = require('../models/hostel');
const Complaint = require('../models/complaint');


// CREATE

 exports.createHostelComplaint = (type, cid, name)=>{

    Hostel.create({
        type:type,
        complaintCid:cid,
        name:name
    })
    .then(result=>{
        console.log("Hostel added\n"+result);
    })
    .catch(err=>{
        console.log("Hostel Adding Failed\n"+err)
        Complaint.findByPK(cid)
        .then(complaint=>{
            return complaint.destroy();
        })
        .catch(err=>{
            console.log(err);
        });
    });

}

// READ

exports.readHostelComplaint = (req, res) => {
    const sid = req.body.sid;
    Complaint.findAll({
            where: {
                studentSid: sid
            },
            include:[{
                model: Hostel,
                attributes: ['type'],
                required : true
            }]
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
};

// UPDATE

// DELETE
