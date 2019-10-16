const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Student = require('./student');




const Lab = require('./lab');
const Mess = require('./mess');
const Faculty = require('./faculty');
const Fees = require('./fees');
const Hostel = require('./hostel');
const Library = require('./library');



const Complaint = sequelize.define('complaint', {
    cid:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.ENUM,
        values: ['faculty','fees','hostel','lab','library','mess'],
        allowNull: false
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    category: {
        type: Sequelize.ENUM,
        values: ['gen','per'],
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    solvedBy: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    studentSid: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Student,
            key: 'sid'
        }
    }


});



//Adding Constraints
Complaint.belongsTo(Student, {
    constraints: true,
    onDelete: 'CASCADE'
});


Fees.belongsTo(Complaint,{
    constraints: true,
    onDelete:'CASCADE'
});

Faculty.belongsTo(Complaint, {
    constraints: true,
    onDelete: 'CASCADE'
});

Hostel.belongsTo(Complaint, {
    constraints: true,
    onDelete: 'CASCADE'
});

Lab.belongsTo(Complaint, {
    constraints: true,
    onDelete: 'CASCADE'
});

Library.belongsTo(Complaint, {
    constraints: true,
    onDelete: 'CASCADE'
});

Mess.belongsTo(Complaint, {
    constraints: true,
    onDelete: 'CASCADE'
});

//Setting Multiplicities
Student.hasMany(Complaint);
Complaint.hasOne(Lab);
Complaint.hasOne(Faculty);
Complaint.hasOne(Mess);
Complaint.hasOne(Fees);
Complaint.hasOne(Hostel);
Complaint.hasOne(Library);


module.exports = Complaint;