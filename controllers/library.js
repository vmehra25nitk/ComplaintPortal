const Library = require('../models/library');
const Complaint = require('../models/complaint');


// CREATE

 exports.createLibraryComplaint = (type,cid)=>{

    Library.create({type:type, complaintCid:cid})
    .then(result=>{
        console.log("Library added\n"+result);
    })
    .catch(err=>{
        console.log("Library Adding Failed\n"+err)
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

exports.readLibraryComplaint = (req, res) => {
    const sid = req.body.sid;
    Complaint.findAll({
            where: {
                studentSid: sid
            },
            include:[{
                model: Library,
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
