const Lab = require('../models/lab');
const Complaint = require('../models/complaint');

// CREATE 

exports.createLabComplaint =   function (cid, name, department, type) {
   
    
        Lab.create({
         complaintCid: cid,
         name: name,
         department: department,
         type: type
            }).then(
                result=>{
                    console.log("Lab Success\n"+result);
                   // status = true;     
                }).catch(err => {
                    console.log("Lab error\n"+err);
                    Complaint.findByPk(cid)
                    .then(complaint => {
                            return complaint.destroy();
                    })
                    .catch(err => {
                        res.send(err);
                    })
                   // status = false;
                });

                

};

// READ

// UPDATE

// DELETE