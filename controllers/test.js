const Complaint = require('../models/complaint');
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.TestCode = (req,res)=>{
    Complaint.findAll({
       attributes:[[sequelize.fn('count',sequelize.col('*')),'myComplaints'], 'studentSid'],
       where: { 
                studentSid : 1
              }
    }).then(result=>{
            //res.send(result);
            var total = result[0].dataValues.myComplaints;
            //console.log(result);
            Complaint.findAll({
                attributes:[[sequelize.fn('count',sequelize.col('*')),'myComplaints'], 'studentSid'],
                where: { 
                         studentSid : 1,
                         cid : {[Op.gt]: 3 }
                       }
            }).then(result1=>{
                    var ans = (result1[0].dataValues.myComplaints);
                    ans/=total;
                    var tobSent = {Val: 0};
                    tobSent.Val = ans;
                    console.log('Values',ans);
                    res.send(tobSent);
            });
    }).catch(err=>{
        res.send(err);
    });
}