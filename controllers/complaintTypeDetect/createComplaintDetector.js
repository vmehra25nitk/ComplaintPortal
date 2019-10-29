const Lab = require('../lab');
const Library = require('../library');
const Hostel = require('../hostel');
const Faculty = require('../faculty');
const Mess = require('../mess');
const Fees = require('../fees');


const Student = require('../../models/authStudent');
//CHANGE TYPE FOR ALL THE CATEGORIES AND NAME FOR HOSTEL
exports.detect = function (req) {
    // console.log("I am here", typeof req.body.category);
    const category = (req.body.category).toLowerCase();
    const cid = req.body.cid;
    const type = req.body.type;
    switch (category) {
        case "lab": {
            const name = req.body.labName;
            const dept = req.body.labSelect;
            Lab.createLabComplaint(cid, name, dept, type);
        }
        return true;

    case 'faculty': {
        const name = req.body.facName;
        const dept = req.body.facSelect;
        Faculty.createFacultyComplaint(type, cid, name, dept);
    }
    return true;
    case 'fees': {

        Fees.createFeesComplaint(type, cid);
    }
    return true;
    case 'hostel': {
        var studentSid = req.body.studentSid;
        var hostelType = req.body.hostelSelect;
        Student.findByPk(studentSid)
            .then(student => {
                var name = student.hostel;
                Hostel.createHostelComplaint(hostelType, cid, name);
            })
            .catch(err => {
                console.log(err);
            })
        //Hostel.createHostelComplaint(type,cid,name);
    }
    return true;
    case 'library': {
        const libraryComplaintType = req.body.libSelect;
        Library.createLibraryComplaint(libraryComplaintType, cid);
    }
    return true;
    case 'mess': {
        var studentSid = req.body.studentSid;
        var messType = req.body.messSelect;
        req.body.messName = "asd";
        var messName = req.body.messName;
        Mess.createMessComplaint(messType, cid, messName);
    }
    return true;
    default:
        return false;

    }
}