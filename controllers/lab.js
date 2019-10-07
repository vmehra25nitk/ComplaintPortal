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

exports.readLabComplaint = (req, res) => {
    const sid = req.body.sid;
    Complaint.findAll({
            where: {
                studentSid: sid
            },
            include:[{
                model: Lab,
                attributes: ['name','type','department'],
                required : true
            }]
        })
        .then(result => {
            //console.log('HAHAHAHA');
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
};


// UPDATE

// DELETE