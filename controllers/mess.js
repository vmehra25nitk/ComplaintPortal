const Mess = require('../models/mess');
const Complaint = require('../models/complaint');


// CREATE

 exports.createMessComplaint = (type,cid)=>{

    Mess.create({type:type, complaintCid:cid})
    .then(result=>{
        console.log("Mess added\n"+result);
    })
    .catch(err=>{
        console.log("Mess Adding Failed\n"+err)
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

exports.readMessComplaint = (req, res) => {
    const sid = req.body.sid;
    Complaint.findAll({
            where: {
                studentSid: sid
            },
            include:[{
                model: Mess,
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
