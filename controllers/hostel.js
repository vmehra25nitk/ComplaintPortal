const Hostel = require('../models/hostel');
const Complaint = require('../models/complaint');


// CREATE

 exports.createHostelComplaint = (type,cid)=>{

    Hostel.create({type:type, complaintCid:cid})
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

// UPDATE

// DELETE
