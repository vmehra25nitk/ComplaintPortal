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

// UPDATE

// DELETE
