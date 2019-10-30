const Fees = require('../models/fees');
const Complaint = require('../models/complaint');
const sequelize = require('sequelize');
const Op = sequelize.Op;

// CREATE

 exports.createFeesComplaint = (type,cid)=>{

    Fees.create({type:type, complaintCid:cid})
    .then(result=>{
        console.log("Fees added\n"+result);
    })
    .catch(err=>{
        console.log("Fees Adding Failed\n"+err)
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

exports.readFeesComplaint = (req, res) => {
    //const sid = req.body.sid;
    Complaint.findAll({
            where: {
                // studentSid: sid
                category: 'fees',
                
            },
            // include:[{
            //     model: Fees,
            //     attributes: ['type'],
            //     required : true
            // }]
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
};

exports.test = (req, res) =>{

    const obj = req.body;
    const fromDate= new Date(obj.fromDate+'T05:30:00');
    var toDate= new Date(obj.toDate+'T05:29:59');
    toDate.setDate(toDate.getDate()+1);
    console.log(fromDate+"  "+toDate);


    Complaint.findAll({
        where: {
            // studentSid: sid
            [Op.and] : [
                        {startDate:{[Op.gte]:fromDate}},
                        {startDate:{[Op.lte]:toDate}}
                       ],
            status: obj.status,
            type : obj.type
        },
        // include:[{
        //     model: Fees,
        //     attributes: ['type'],
        //     required : true
        // }]
    })
    .then(result => {
        //console.log(result)
        res.send(result);
    })
    .catch(err => {
        res.send(err);
    });


};


// UPDATE

// DELETE
