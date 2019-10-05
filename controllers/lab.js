const Lab = require('../models/lab');

// CREATE 

exports.createLabComplaint = function (cid, name, department, type) {
    Lab.create({
            cid: cid,
            name: name,
            department: department,
            type: type
        })
        .then(() => {
            res.send("OK");
        })
        .catch(err => {
            res.send(err);
        })

};

// READ

// UPDATE

// DELETE