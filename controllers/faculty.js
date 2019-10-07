const Faculty = require('../models/faculty');
const Complaint = require('../models/complaint');


// CREATE

 exports.createFacultyComplaint = (type,cid,name,department)=>{

    Faculty.create({type:type, complaintCid:cid, name:name, department: department})
    .then(result=>{
        console.log("Faculty added\n"+result);
    })
    .catch(err=>{
        console.log("ERROR:----------Faculty Adding Failed --"+err)
        Complaint.findByPK(cid)
        .then(complaint=>{
            return complaint.destroy();
        })
        .catch(err=>{
            console.log("ERROR:---------- "+err);
        });
    });
}

// READ

exports.readFacultyComplaint = (req, res) => {
    const sid = req.body.sid;
    Complaint.findAll({
            where: {
                studentSid: sid
            },
            include:[{
                model: Faculty,
                attributes: ['name','type','department'],
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
